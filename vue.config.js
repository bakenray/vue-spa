const configs = require('./config/index')
const merge = require('webpack-merge')
const cfg = process.env.NODE_ENV ==='development'?configs.dev.env:configs.dev.env

module.exports = {
    // publicPath:'',
    outputDir:'build',
    assetsDir:'static',
    productionSourceMap: true,
    chainWebpack:config =>{
        config.plugin('define')
            .tap(args =>{
                let name = 'process.env'

                args[0][name] = merge(args[0][name],cfg)
                
                return args
            })
    }
}