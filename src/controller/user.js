const { SuccessModel, ErrorModel } = require('../model/ResModel')
const ErrorInfo = require('../model/ErrorInfo')
const UserServices = require('../services/user')

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

module.exports = {
    register,
}