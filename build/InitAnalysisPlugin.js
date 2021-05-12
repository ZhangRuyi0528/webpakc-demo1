/* eslint-disable */
/*
 * @Author: zry
 * @Date: 2021-05-12 14:00:36
 * @LastEditors: zry
 * @LastEditTime: 2021-05-12 14:46:17
 * @Description: 
 */

const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const env = process.env.NODE_ENV || 'production';
const actions = process.env.NODE_ACTION;

class InitAnalysisPlugin {
    constructor(options) {
        this.analysis = options.analysis;
        this.pluginName = 'InitAnalysisPlugin';
    }

    apply(compiler) {
        console.log(33333,  this);
        this.analysis && new WebpackBundleAnalyzer().apply(compiler);
        compiler.hooks.emit.tapAsync({
            name: this.pluginName
        }, (compilation, cb) => {
            cb();
        })
    }
}

module.exports = InitAnalysisPlugin;
