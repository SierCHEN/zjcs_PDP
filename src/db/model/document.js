const Sequelize = require('../seq')
const { STRING, INTEGER, TEXT } = require('../types')

const Document = Sequelize.define('document', {
    title: {
        type: STRING,
        allowNull: false,
        comment: '用户名，唯一'
    },
    content: {
        type: TEXT,
        allowNull: false,
        comment: '内容，可以是富文本格式，也可以是文件地址'
    },
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '由谁编写上传'
    },
    activityId: {
        type: INTEGER,
        allowNull: false,
        comment: '属于哪个活动 '
    }
})

module.exports = Document