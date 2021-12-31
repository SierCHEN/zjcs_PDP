class BaseModel {
    constructor({ errno, data }) {
        this.errno = errno
        if (data) {
            this.data = data
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data = {}) {
        super({
            errno: 0,
            data
        })
    }
}

class ErrorModel extends BaseModel {
    constructor({ errno, data = {} }) {
        super({
            errno,
            data
        })
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}