const { ErrorModel } = require('../model/ResModel')
const ErrorInfo = require('../model/ErrorInfo')
const { checkToken } = require('../utils/token')


//role === 1 管理员权限路由。
const verifyList = [
    {}
]


/**
 * 检查路由是否需要权限，返回一个权限列表
 *
 * @return {Array} 返回 roleList
 */
function checkRoute(method, url) {
    function _verify(list) {
        const target = list.find(v => {
            return v.regexp.test(method) && v.regexp.test(url)
        })
        return target
    }

    const roleList = []
    const result = _verify(verifyList)

    result && roleList.push({ url: url, role: 1 })

    return roleList
}



/**
 * API 登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function authCheck(ctx, next) {
    const roleList = checkRoute(ctx.method, ctx.url)
    //  该路由需要验证
    if (roleList.length > 0) {
        if (checkToken(ctx, roleList)) {
            await next()
        } else {
            ctx.body = new ErrorModel(ErrorInfo.authCheckFailInfo)
        }
    } else {
        await next()
    }
}

module.exports = {
    authCheck,
}