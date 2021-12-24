const Sequelize = require('../seq')
const { STRING } = require('../types')

const User = Sequelize.define('user', {
    userName: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '用户名即邮箱，唯一'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码'
    },
    nickName: {
        type: STRING,
        comment: '昵称'
    },
    phone: {
        type: STRING,
        allowNull: false,
        comment: '手机号码'
    },    
    picture: {
        type: STRING,
        comment: '头像，图片地址'
    },
})

module.exports = User
