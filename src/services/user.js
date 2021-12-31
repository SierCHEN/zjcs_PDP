const { User: UserModel } = require("../db/model/index")
const Joi = require('joi')
const { comparePassword, encrypt } = require('../utils/bcrypt')
const { formatUser } = require('./_format')

class UserServices {

    static async getUserInfo(userName, password, code) {
        const whereOpt = { userName, state: '1' }

        const result = await UserModel.findOne({
            attributes: ['id', 'role', 'userName', 'password', 'nickName', 'phone', 'picture'],
            where: whereOpt
        })
        if (result == null) {
            return result
        } else {
            if (code == 'log') {
                const isMatch = await comparePassword(password, result.password)
                if (isMatch) {
                    result.isMatch = true;
                }
                return result
            } else return result
            //设置默认头像
            //const formatRes = formatUser(result.dataValues)          
        }
    }

    // 注册
    static async createUser({ userName, password, nickName, phone }) {
        const saltPassword = await encrypt(password)
        const result = await UserModel.create({
            role: '2',
            userName,
            password: saltPassword,
            nickName: nickName ? nickName : userName,
            phone,
            state: '1'
        })
        return result.dataValues
    }

}

module.exports = UserServices