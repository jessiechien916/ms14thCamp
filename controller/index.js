var path = require('path');

module.exports = function renderPage(req,res){
    res.sendFile(path.join(__dirname,'../','index.html'));
}
