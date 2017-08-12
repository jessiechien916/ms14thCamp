var    express      = require('express'),
       router       = express.Router();
       index        = require('../controller/index'),
       add          = require('../controller/add'),
  
       
      


router.route('/').get(index);
router.route('/api/add').post(add);


module.exports = router;
