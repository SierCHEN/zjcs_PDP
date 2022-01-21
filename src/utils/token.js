const jwt = require('jsonwebtoken')
const { TOKEN } = require('../conf')
const util = require('util')
const verify = util.promisify(jwt.verify)

exports.createToken = info => {
  const token = jwt.sign(info, TOKEN.secret, { expiresIn: TOKEN.expiresIn })
  return token
}


/**
 * @param {Object} ctx - app.context
 * @param {Array} roleList - 需要具备的权限 { url: 'url', role: 1 }
 *
 * @return {Boolean} 是否验证通过
 */
exports.checkToken = async (ctx, roleList = [], next) => {
  let isVerify = false
  function _verify(token) {
    return verify(token, TOKEN.secret, function (err, decoded) {
      if (err) {
        return false
      } else if (decoded) {
        return !!roleList.find(item => item.role === decoded.role)
      }
      return false
    })
  }


  if (item.method === 'post') {
    const authorizationHeader = ctx.header.authorization
    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1] // 取到 token
      const result = _verify(token)
      if (result) {
        isVerify = true
        return isVerify
      }
    }
  } else {
    const { token } = ctx.query
    if (token) {
      const _token = token.split(' ')[1] // 取到 token 过滤 Bearer
      const result = _verify(_token)
      if (result) {
        isVerify = true
        return isVerify
      }
    }
  }
}