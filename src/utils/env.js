const ENV = process.env.NODE_ENV

module.exports = {
    isDev: ENV === 'dev',
    notDev: ENV !== 'dev',
    isProd: ENV === 'pro',
    notProd: ENV !== 'pro',
    isTest: ENV === 'test',
    notTest: ENV !== 'test'
}