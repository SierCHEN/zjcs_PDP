const Sequelize = require('../seq')
const { STRING, INTEGER } = require('../types')

const NotifyMe = Sequelize.define('summary', {
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '通知谁'
    },
    activityId: {
        type: INTEGER,
        allowNull: false,
        comment: '哪个活动 '
    },
    isRead: {
        type: STRING,
        allowNull: false,
        comment: '是否已读'
    }
})

module.exports = NotifyMe