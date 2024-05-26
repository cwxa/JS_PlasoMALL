const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: 3000,
    },
    production: {
        port: 80,
    },
};

module.exports = config[env];