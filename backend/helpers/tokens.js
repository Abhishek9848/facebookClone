const jwt = require('jsonwebtoken')

import { Jwt } from 'jsonwebtoken'


exports.generateToken =(payload , expired) =>{
    return jwt.sign(payload , secret , expired)
}