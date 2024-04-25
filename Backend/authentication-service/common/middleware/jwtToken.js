const jwt = require('jsonwebtoken')

const getJwtToken = (userId)=>{
    return jwt.sign({UserId: userId}, "xyz123", {expiresIn : '1 day'}  )
}

module.exports = getJwtToken;