var    express      = require('express'),
       router       = express.Router();
       index        = require('../controller/index');

router.route('/').get(index);

module.exports = router;
