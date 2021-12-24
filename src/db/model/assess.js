const Sequelize = require('../seq')
const { STRING, INTEGER } = require('../types')

const Assess = Sequelize.define('assess', {
    score: {
        type: STRING,
        allowNull: false,
        comment: '党员成绩'
    },
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '考核人'
    },
    quarter: {
        type: STRING,
        allowNull: false,
        comment: '考核季度'
    }
})

module.exports = Assess