const bcrypt = require('bcrypt')
let SALT_WORK_FACTOR = 10;

/**
 * @func encrypt - 加密
 * @param {String} - 密码
 */

const encrypt = password => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
            if (err) {
                reject(password)
            }
            bcrypt.hash(password, salt, function (err, hash) {
                if (err) {
                    reject(password)
                }
                resolve(hash)
            })
        })
    })
}

/**
 * @func comparePassword - 密码校验
 * @param {String} _password - 需要校验的密码
 * @param {String} hash - 加密后的密码
 */
const comparePassword = (password, hash) => {
    console.log(password,hash)
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function (err, isMatch) {
            if (err) reject(err)
            else resolve(isMatch)
        })
    })
}

module.exports = {
    encrypt,
    comparePassword
}