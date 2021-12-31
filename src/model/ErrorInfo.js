const ErrorInfo = {
    // 用户名已存在
    registerUserNameExistInfo: {
        errno: 10001,
        data: {
            message: '该邮箱已被注册'
        }
    },
    // 注册失败
    registerFailInfo: {
        errno: 10002,
        data: {
            message: '注册失败，请重试'
        }
    },
    // 用户名不存在------待修改
    registerUserNameNotExistInfo: {
        errno: 10003,
        data: {
            message: '该用户不存在'
        }
    },
    // 登录失败
    loginFailInfo: {
        errno: 10004,
        data: {
            message: '登录失败，用户名或密码错误'
        }
    },
    // 未登录
    loginCheckFailInfo: {
        errno: 10005,
        data: {
            message: '您尚未登录'
        }
    },
    // 修改密码失败
    changePasswordFailInfo: {
        errno: 10006,
        data: {
            message: '修改密码失败，请重试'
        }
    },
    // 上传文件过大
    uploadFileSizeFailInfo: {
        errno: 10007,
        data: {
            message: '上传文件尺寸过大'
        }
    },
    // 修改基本信息失败
    changeInfoFailInfo: {
        errno: 10008,
        data: {
            message: '修改基本信息失败'
        }
    },
    // json schema 校验失败
    jsonSchemaFileInfo: {
        errno: 10009,
        data: {
            message: '数据格式校验错误'
        }
    },
    // 删除用户失败
    deleteUserFailInfo: {
        errno: 10010,
        data: {
            message: '删除用户失败'
        }
    },
    // 添加关注失败
    addFollowerFailInfo: {
        errno: 10011,
        data: {
            message: '添加关注失败'
        }
    },
    // 取消关注失败
    deleteFollowerFailInfo: {
        errno: 10012,
        data: {
            message: '取消关注失败'
        }
    },
    // 创建微博失败
    createBlogFailInfo: {
        errno: 11001,
        data: {
            message: '创建微博失败，请重试'
        }
    },
    // 删除微博失败
    deleteBlogFailInfo: {
        errno: 11002,
        data: {
            message: '删除微博失败，请重试'
        }
    }
}

module.exports = ErrorInfo