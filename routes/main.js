
const cache = require("../middleware/cache")
const cacheClear = require("../middleware/cache_clear")
const getRepos = require("../middleware/getRepos")

const router = express.Router() 

router.get('/repos/:username', cache, getRepos)

router.get('/repos/logout', cacheClear)

module.exports = router
