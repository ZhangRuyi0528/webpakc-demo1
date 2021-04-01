'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    // {
    //     name: 'better-scroll',
    //     var: 'BScroll',
    //     resources: isDevelopment => ({
    //         scripts: [
    //             path.join(__dirname, `../node_modules/better-scroll/dist/bscroll.${isDevelopment ? '' : 'min.'}js`)
    //         ]
    //     })
    // },
    {
        name: 'element-ui',
        var: 'ELEMENT',
        resources: () => ({
            scripts: [path.join(__dirname, '../node_modules/element-ui/lib/index.js')],
            styles: [],
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
                const distPath = `${venderPath}/bundle/vender/${distFileName}`;
                venders.js.push(`/bundle/vender/${distFileName}`);
                copyConfigs.push({
                    from: script,
                    to: distPath,
                    force: true
                });
            });
        });
        console.log('conpuConfigs', copyConfigs);
        new CopyWebpackPlugin(copyConfigs).apply(compiler);
        compiler.hooks.emit.tapAsync({ name: 'WebpackExternalPlugin' }, (compilation, callback) => {
            fs.writeFile(`${venderPath}/webpack-venders.json`, JSON.stringify(venders), 'utf8', function(err) {
                if (err) {
                    compilation.errors.push(err);
                }
                callback();
            });
        });
    }
}

module.exports = WebpackExternalPlugin;

module.exports.externalConfigs = externalConfigs;
