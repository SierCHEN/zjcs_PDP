const validate = require('./_validate')

// 校验规则
const SCHEMA = {
    type: 'object',
    properties: {
        userName: {
            type: 'string',
            format: 'email',
            maxLength: 255,
        },
        password: {
            type: 'string',
            pattern: '^.*(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])', // 必须包含大小写字母和数字
            maxLength: 255,
            minLength: 6
        },
        newPassword: {
            type: 'string',
            pattern: '^.*(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])',
            maxLength: 255,
            minLength: 6
        },
        nickName: {
            type: 'string',
            maxLength: 255
        },
        phone: {
            type: 'string',
            maxLength: 255,
            minLength: 11
        },
        picture: {
            type: 'string',
            maxLength: 255
        },
    }
}

/**
 * 校验用户数据格式
 * @param {Object} data 用户数据
 */
function userValidate(data = {}) {
    return validate(SCHEMA, data)
}

module.exports = userValidate