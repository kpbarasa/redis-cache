
const REDIS_PORT = process.env.PORT || 6379;
const getRedisClient = new ioRedis(REDIS_PORT);

// Cache middleware
module.exports = function (req, res, next) {

    console.log("cache . . . . . . .");
    const { username } = req.params;

    getRedisClient.get(username, (err, data) => {
        if (err) throw err;

        if (data !== null) {
            console.log("cache . . . Data");
            res.json({ "username": username, "apiResponse": data })
        } else {
            console.log("cache . . . NO  Data");
            next();
        }
    });
}