<h4>Node Js Redis Cache<h4>

<p>
This is ab simple ack-end node application thast stores user names in a database (Mongo DB).
</p>

<h5>Software ======================================================================================================================================================= </h5>

1. Node js 
2. Express js

<h5>Libraries =======================================================================================================================================================</h5>

Dev dependences:
1.  nodemon 

Dependences:
1.  axios
2.  dotenv
3.  express
4.  ioredis
5.  redis
6.  mongoose

<h5>Database</h5>
•	Mongo DB 

<h4>Components
=================================================================================================================================================</h4>

<h5>1.  index(index.js) ============================================================================</h5>

<h5>2. middleware  ==================================================================================== </h5> 
	1. Cache clear:
<br> 
       "Clear cahce based on key index"

<br> 
	2. Cache:
<br> 
       "Set cache index and value if cache index does not exist"

<br>  
	3. Get repos:
<br> 
       "Get data from mongo db"
	   
<br> 

<h5>3. Routes  ==============================================================================</h5>

1. main (main.controller.js)
<ul>
	<li>
	    @desc        cache data, get data
        @route       GET: /repos/:username
		@middleware: cache, getRepos
	</li>
	<li>
	    @desc        Clear cache
        @route       GET: /repos/logout
		@middleware: cacheClear
	</li>
</ul>
<br> 

<h5>4. models (Data models)  =========================================================================</h5>

       data model  (data.js)
<br>  


<h5>5 .env =================================================================================</h5>



# Node Config
ATLAS_URI=mongodb+srv://
paulBarasa:iZn9gxbNyXFusFN0@cluster0.4p1ws.mongodb.net/
myFirstDatabase?retryWrites=true&w=majority
PORT=5000
REDIS_PORT=6379
productionPort = 8000

<br>
  
