const Sequelize = require('../seq')
const { STRING, INTEGER } = require('../types')

const User = Sequelize.define('user', {
    role: {
        type: INTEGER,
        allowNull: false,
        comment: '1表示admin，2表示普通用户'
    },
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
    state: {
        type: INTEGER,
        allowNull: false,
        comment: '0表示该用户及其信息已被删除，1表示该用户未被删除'
    },
})

module.exports = User
