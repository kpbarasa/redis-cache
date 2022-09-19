
const REDIS_PORT = process.env.PORT || 6379;
const getRedisClient = new ioRedis(REDIS_PORT);

// Cache middleware
module.exports = async function (req, res, next) {

    console.log("cache . . . . . . .");
    const { username } = req.params;
    
    await redis.del(3600)

    getRedisClient.get(username, (err, data) => {
        if (err) throw err;

        if (data === null) {

            console.log("cache . . . cleared");

            res.json({ "username": username, "apiResponse": data })

        } else {

            console.log("cache . . . NO  Data");
            next();
        }
    });
}