var    express      = require('express'),
       router       = express.Router();
       index        = require('../controller/index'),
       query        = require('../controller/query'),
       add          = require('../controller/add'),
       del          = require('../controller/delete'),
       read         = require('../controller/read'),
       signup       = require('../controller/sign_up'),
       addAbout     = require('../controller/add_about'),
       about        = require('../controller/about'),
       edit         = require('../controller/edit_user');


router.route('/').get(index);
router.route('/api/query').get(query);
router.route('/api/add').post(add);
router.route('/api/:id').get(read)
                        .delete(del);
router.route('/api/signup').post(signup);
router.route('/api/addAbout').post(addAbout);
router.route('/api/user/:id').get(about)
                             .put(edit);

module.exports = router;
