const configs = require('./config/index')
const merge = require('webpack-merge')
const node_env = process.env.NODE_ENV
const cfg = node_env ==='development'?configs.dev.env:configs.dev.env

const path = require('path')
const resolve = dir =>{return path.join(__dirname, dir)}

module.exports = {
    publicPath:'./',
    outputDir:'build',
    assetsDir:'',
    productionSourceMap:node_env==='production'?false:true,
    css:{
        loaderOptions:{
            sass:{
                prependData:`@import "@/common/base.scss";`
            }
        }        
    },
    devServer: {
        proxy: {
            // 接口是 '/repos' 开头的才用代理
            '/repos/': {
                target:'https://api.github.com', // 目标地址
                changeOrigin: true,              // 是否改变源地址
            }
        },
    },
    chainWebpack:config =>{

        config.plugin('define')
            .tap(args =>{
                let name = 'process.env'

                args[0][name] = merge(args[0][name],cfg)
                
                return args
            })
        config.resolve.alias
        .set('@',resolve('src'))
        .set('@com',resolve('src/components'))
        .set('@img',resolve('src/assets'))
        .set('@view',resolve('src/views'))           
    }
}