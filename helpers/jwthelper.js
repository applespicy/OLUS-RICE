const jwt = require ('jsonwebtokenn');
const createError = require ('http-errors') 
module.exports={
    signAccessToken: (userid)=>{
        return new Promise((resolve, reject)=>{
      const payload={name:"yours truly"}
      const secret = "some super secret"
      const options = {}
            jwt.sign (payload, secret, options, (err, token)=>{
                if (err) reject (err)
                resolve(token)
            })
        })
    }
}