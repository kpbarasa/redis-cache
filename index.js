express = require('express');
redis = require('redis');
ioRedis = require('ioredis');
// require('dotenv').config();

const mongoose = require('mongoose'); 
const PORT = process.env.PORT || 5000;

const app = express();

// Connection String to express atlas and Environment variable.
const uri = process.env.ATLAS_URI //|| "mongodb+srv://paulBarasa:iZn9gxbNyXFusFN0@cluster0.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, { 
  
    useNewUrlParser: true, useUnifiedTopology: true 

  },err => { 
    if(err){
        console.log('Error un able Connected to MongoDB!!!')
    }
    else{
        console.log('Connected to MongoDB!!!')
    }
    }
)

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully"); 
})

const routes = require('./routes/main');

app.use('/', routes)

app.listen(PORT, () => {
  console.log(process.env.PORT)
    console.log("app listening on Port: "+PORT);
})