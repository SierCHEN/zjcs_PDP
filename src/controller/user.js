const { SuccessModel, ErrorModel } = require('../model/ResModel')
const ErrorInfo = require('../model/ErrorInfo')
const UserServices = require('../services/user')

/**
 * 注册
 * @param {string} userName 用户名，即邮箱
 * @param {string} password 密码
 * @param {string} password 昵称
 * @param {string} password 电话号码
 * @returns 
 */
async function register({ userName, password, nickName, phone }) {
    const userInfo = await UserServices.getUserInfo(userName)
    if(userInfo){
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
        return new ErrorModel(registerFailInfo)
    }
}

async function login( ctx, { userName, password } ) {
    
}

module.exports = {
    register,
}