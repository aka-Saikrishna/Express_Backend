const Logger = (req, res, next) => {
    const startTime = Date.now(); // 10:35
    res.on('finish', () => {
        const duration = Date.now() - startTime; // 10:38 - 10:35 = 3s
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    })
    next();
}

module.exports = Logger;


// Output:
// GET /" 200 - 3ms