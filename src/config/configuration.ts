export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST || '127.0.0.1',
        port: parseInt(process.env.DATABASE_PORT, 10) || 3304,
        database: process.env.DATABASE_NAME || 'eco_xt',
        username: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASSWORD || '',
    },
    jwt: {
        at_secret: process.env.ACCESS_TOKEN_SECRET,
        exp_in: process.env.ACCESS_TOKEN_EXPIRES_IN || '60s'
    }
});