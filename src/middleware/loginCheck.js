const { ErrorModel } = require('../model/ResModel')
const ErrorInfo = require('../model/ErrorInfo')

/**
 * API 登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginCheck(ctx, next) {
    if (ctx.body.token) {
        // 已登录
        await next()
        return
    }
    // 未登录
    ctx.body = new ErrorModel(ErrorInfo.loginCheckFailInfo)
}


module.exports = {
    loginCheck,
}
