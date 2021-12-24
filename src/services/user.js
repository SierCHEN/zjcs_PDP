const { User: UserModel } = require("../db/model/index")
const Joi = require('joi')
const { comparePassword, encrypt } = require('../utils/bcrypt')
const { formatUser } = require('./_format')

class UserServices {

    static async getUserInfo(userName, password) {
        const whereOpt = { userName }
        if (password) {
            Object.assign(whereOpt, { password })
        }
        const result = await UserModel.findOne({
            attributes: ['id', 'userName', 'nickName', 'phone', 'picture'],
            where: whereOpt
        })
        if (result == null) {
            return result
        }
        //设置默认头像
        const formatRes = formatUser(result.dataValues)
        return formatRes
        
    }

    // 注册
    static async createUser({ userName, password, nickName, phone }) {
        const saltPassword = await encrypt(password)     
        const result = await UserModel.create({
            userName,
            password: saltPassword,
            nickName: nickName ? nickName : userName,
            phone
        })
        return result.dataValues 
    }

}

module.exports = UserServices