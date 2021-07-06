const crypto = require('crypto');
const keys = (req, res, next) =>{
    if(!req.header('key')){
        const err = new Error('Error in the key validation');
        res.status(401).json({
            success: false,
            message: err.message,
            stack: process.env.NODE_ENV === 'production'?'':err.stack,
        });
    }
    if(!crypto.timingSafeEqual(Buffer.from(process.env.API_KEY), Buffer.from(req.header('treasure-key')))){
        const err = new Error('Key error, no permision');
        res.status(401).json({
            success: false,
            message: err.message,
            stack: process.env.NODE_ENV === 'production'?'':err.stack,
        })   
    }else{
        next();
    }
};
module.exports = keys;