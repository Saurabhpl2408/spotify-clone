const jwt = require('jsonwebtoken');
// exports={}
exports.getToken = async (email,user) =>{
    const token = await jwt.sign({identifier:user._id},"secret");
    return token
};

module.exports=exports;