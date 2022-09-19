const axios = require('axios').default;
const data = require('../model/data')


const REDIS_PORT = process.env.PORT || 6379;
const getRedisClient = new ioRedis(REDIS_PORT);

// Make request to Github for data
module.exports =  async function (req, res, next) {
  try {
    console.log('Fetching Data...');

    const { username } = req.params;
        
    await data.find({ _id:"62cc07a30ccc6983878c602f"}, function (err, getData) {
      
      getRedisClient.json().setex(username, 3600, getData)

      return res.json({"username":username, "apiResponse":getData})

    })



  } catch (err) {

    console.error(err);
    res.status(500);
    
  }
}
