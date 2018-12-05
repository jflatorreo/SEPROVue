module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/new/'
        : '/',
    css: {
        extract: false
    },
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    }
}



