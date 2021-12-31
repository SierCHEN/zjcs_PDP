const { SuccessModel, ErrorModel } = require('../model/ResModel')
const ErrorInfo = require('../model/ErrorInfo')
const UserServices = require('../services/user')
const { createToken, checkToken } = require('../utils/token')

/**
 * 注册
 * @param {string} userName 用户名，即邮箱
 * @param {string} password 密码
 * @param {string} password 昵称
 * @param {string} password 电话号码
 * @returns 
 */
async function register({ userName, password, nickName, phone }) {
    const userInfo = await UserServices.getUserInfo(userName, password, code = 'reg')
    if (userInfo) {
        return new ErrorModel(ErrorInfo.registerUserNameExistInfo)
    }
    try {
        await UserServices.createUser({
            userName,
            password,
            nickName,
            phone
        })
        return new SuccessModel()
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(ErrorInfo.registerFailInfo)
    }
}


/**
 * 登录
 * @param {Object} ctx koa2 ctx
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function login(ctx, userName, password) {
    const userInfo = await UserServices.getUserInfo(userName, password, code = 'log')
    if (!userInfo) {
        const error = new ErrorModel(ErrorInfo.loginFailInfo)
        console.log(error)
        return error
    } else {
        if (!userInfo.isMatch) {
            return new ErrorModel(ErrorInfo.loginFailInfo)
        } else {
            const { userName, id, role } = userInfo;
            const token = createToken({ userName, id, role }) // 生成 token
            ctx.body = { userName, id, role, token }
            return new SuccessModel({
                userName: userName,
                role: role,
                token: token
            })
        }

    }


}

module.exports = {
    register,
    login
}