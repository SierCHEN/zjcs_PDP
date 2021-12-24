const Sequelize = require('../seq')
const { STRING } = require('../types')

const Activity = Sequelize.define('activity', {
    activityName: {
        type: STRING,
        allowNull: false,
        comment: '活动名字'
    },
    date: {
        type: STRING,
        allowNull: false,
        comment: '活动举行时间'
    }
})

module.exports = Activity