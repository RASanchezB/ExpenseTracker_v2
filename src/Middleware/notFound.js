const notFound = (_req, res, next) =>{
    res.status(404).json({
        success: false,
        message: '404 Not Found'
    });
};
module.exports = notFound;