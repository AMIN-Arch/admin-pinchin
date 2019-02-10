const path = require('path')

module.exports = {
    pwa: {
        themeColor: '#757575',
        msTileColor: '#757575',
        appleMobileWebAppStatusBarStyle: 'black-translucent',
        name: 'Pin Chin'
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('src'),
                'src': path.resolve('src'),
                'assets': path.resolve('src/assets'),
                'components': path.resolve('src/components'),
                'directives': path.resolve('src/directives'),
                'data': path.resolve('src/data'),
                'vuex-store': path.resolve('src/store')
            }
        },
    },
}
