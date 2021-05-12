/* eslint-disable */
'use strict';
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 插件已不维护，替换html-webpack-tags-plugin
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-tags-plugin');

const path = require('path');
const fs = require('fs');

const venderPath = path.join(__dirname, '../');

function getDistVendorResources(key, isDevelopment) {
    const scripts = [];
    if (isDevelopment) {
        scripts.push(path.join(__dirname, `../node_modules/${key}/dist/${key}.js`));
    } else {
        scripts.push(path.join(__dirname, `../node_modules/${key}/dist/${key}.min.js`));
    }

    return {
        scripts,
        styles: [],
        resources: []
    };
}

const externalConfigs = [
    {
        name: 'vue',
        var: 'Vue',
        resources: isDevelopment => getDistVendorResources('vue', isDevelopment)
    },
    // {
    //     name: 'vuex',
    //     var: 'Vuex',
    //     resources: isDevelopment => getDistVendorResources('vuex', isDevelopment)
    // },
    {
        name: 'jquery',
        var: 'jQuery',
        resources: isDevelopment => getDistVendorResources('jquery', isDevelopment)
    },
    {
        name: 'vue-router',
        var: 'VueRouter',
        resources: isDevelopment => getDistVendorResources('vue-router', isDevelopment)
    },
    {
        name: 'element-ui',
        var: 'ELEMENT',
        resources: () => ({
            scripts: [path.join(__dirname, '../node_modules/element-ui/lib/index.js')],
            styles: [path.join(__dirname, '../node_modules/element-ui/lib/theme-chalk/index.css')],
            resources: []
        })
    }
];

class WebpackExternalPlugin {
    static get externals() {
        return externalConfigs.reduce((result, external) => {
            result[external.name] = external.var;
            return result;
        }, {});
    }

    apply(compiler) {
        const isDevelopment = process.env.NODE_ENV !== 'production';
        const copyConfigs = [];
        let externalsConfig = [];
        const venders = {
            js: [],
            css: []
        };
        externalConfigs.forEach(externalConfig => {
            const resources = externalConfig.resources(isDevelopment);
            const { version } = require(path.join(
                __dirname,
                `../node_modules/${externalConfig.name}/package.json`
            ));
            resources.scripts.forEach(script => {
                const distFileName = `${externalConfig.name}-${version}/${path.basename(script)}`;
                const distPath = `${venderPath}bundle/vender/${distFileName}`;
                venders.js.push(`/bundle/vender/${distFileName}`);
                externalsConfig.push({
                    path: `./vender/${distFileName}`,
                });
                copyConfigs.push({
                    from: script,
                    to: distPath,
                    force: true
                });

            });
            resources.styles.forEach(style => {
                const distFileName = `${externalConfig.name}-${version}/${path.basename(style)}`;
                const distPath = `${venderPath}bundle/vender/${distFileName}`;
                venders.css.push(`./vender/${distFileName}`);
                // externalsConfig.push({
                //     path: `./vender/${distFileName}`
                // });
                copyConfigs.push({
                    from: style,
                    to: distPath,
                    force: true
                });
            });
        });
        new CopyWebpackPlugin(copyConfigs).apply(compiler);
        console.log('copyConfigs', copyConfigs, externalsConfig);
        // html中插入脚本依赖
        new HtmlWebpackIncludeAssetsPlugin({
            scripts: externalsConfig,
            links: venders.css,
            // tags: venders.css.concat(venders.js),
            append: false,
        }).apply(compiler);
        compiler.hooks.emit.tapAsync({ name: 'WebpackExternalPlugin' }, (compilation, callback) => {
            // 写入webpack-vender包，方便查询
            fs.writeFile(`${venderPath}/webpack-venders.json`, JSON.stringify(venders), 'utf8', function(err) {
                if (err) {
                    compilation.errors.push(err);
                }
                // 用于自定义的webpack插件能执行，真正要做的就是上面CopyWebpackPlugin，HtmlWebpackIncludeAssetsPlugin插入html
                callback();
            });
        });
    }
}

module.exports = WebpackExternalPlugin;

module.exports.externalConfigs = externalConfigs;
