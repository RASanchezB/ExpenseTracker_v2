const error = (err, _req, res, next) =>{
    res.status(500).json({
        success: false,
        message: err.message,
        stack: ProcessingInstruction.env.NODE_ENV === 'production' ? '':err.stack,
    });
};
module.exports = error;