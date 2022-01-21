const router = require('koa-router')()
const koaForm = require("formidable-upload-koa")
const { register, login } = require('../controller/user')
const { genValidator } = require('../middleware/validator')
const { loginCheck } = require('../middleware/loginCheck')
const userValidate = require('../validator/user')

router.prefix('/api/users')

router.post('/register', genValidator(userValidate), async (ctx, next) => {
    const { userName, password, nickName, phone } = ctx.request.body;
    ctx.body = await register({ userName, password, nickName, phone }, ctx)
})

router.post('/login', async (ctx, next) => {
    const { userName, password } = ctx.request.body;
    ctx.body = await login(ctx, userName, password)
})

//修改头像
router.post('/avatar', loginCheck, koaForm(), async (ctx, next) => {
    const file = ctx.req.files['file']
    const { size, path, name, type } = file
})

module.exports = router
