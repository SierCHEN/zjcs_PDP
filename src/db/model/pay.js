const Sequelize = require('../seq')
const { STRING, INTEGER } = require('../types')

const Pay = Sequelize.define('pay', {
    amount: {
        type: STRING,
        allowNull: false,
        comment: '缴费金额'
    },
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '缴费人'
    },
    month: {
        type: STRING,
        allowNull: false,
        comment: '缴费月份'
    }
})

module.exports = Pay