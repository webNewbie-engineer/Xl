module.exports = {
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
                item
                    .use('sass-resources-loader')
                    .loader('sass-resources-loader')
                    .options({
                        // 要公用的scss的路径
                        resources: './src/assets/css/public.scss'
                    })
                    .end()
            })
    },
    publicPath: './',
    //在根目录下创建vue.config.js,如下配置：
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081', //路径指向本地主机地址及端口号
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/data', //路径转发代理

                },
            },
            '/common': {
                target: 'http://localhost:8081', //路径指向本地主机地址及端口号
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/common', //路径转发代理
                },
            }
        }
    },

}