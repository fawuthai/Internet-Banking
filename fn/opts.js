var opts = {
    GENERAL: {
        PRODUCTS_PER_PAGE: 6
    },

    ACCESS_TOKEN: {
        SECRET_KEY: 'secret',
        LIFETIME: 600 // in seconds
    },

    REFRESH_TOKEN: {
        SIZE: 80
    },

    // DB: {
    //     HOST: '127.0.0.1',
    //     PORT: '8889',
    //     USER: 'root',
    //     PWD: 'root',
    //     DB_NAME: 'qlbh'
    // }
    DB: {
        HOST: 'sql12.freemysqlhosting.net',
        PORT: '3306',
        USER: 'sql12325003',
        PWD: 'xMyiQHwVfT',
        DB_NAME: 'sql12325003'
    }
}

module.exports = opts;