const Sequelize = require('../seq')
const { TEXT, INTEGER } = require('../types')

const Appraisal = Sequelize.define('appraisal', {
    content: {
        type: TEXT,
        allowNull: false,
        comment: '评价内容'
    },
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '对谁的评价'
    },
    fromUserId: {
        type: INTEGER,
        allowNull: false,
        comment: '谁写的 '
    }
})

module.exports = Appraisal