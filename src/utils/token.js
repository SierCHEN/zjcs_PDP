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
 * @param {Array} roleList - 需要具备的权限 { role: 1, verifyTokenBy: 'url' }
 *
 * @return {Boolean} 是否验证通过
 */
exports.checkToken = async (ctx, next) => {
  const token = ctx.header.authorization
  try{
    const result = await verify(token.split(' ')[1], TOKEN.secret)
    ctx.body = {
      errno: 0,
      userInfo: result
    }
  }catch(error){
    ctx.body = {
      errno: -1,
      userInfo: "verify token failed"
    }
  }
}