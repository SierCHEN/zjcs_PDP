const Sequelize = require('../seq')
const { INTEGER } = require('../types')

const SignIn = Sequelize.define('signIn', {
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '谁签到的'
    },
    activityId: {
        type: INTEGER,
        allowNull: false,
        comment: '哪个活动 '
    }
})

module.exports = SignIn