module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/'
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



