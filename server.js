var express = require('express');
var route = require('./app/routes/index.js');
var app = express();
app.use('/public', express.static(process.cwd() + '/public'));
route(app);
app.listen(3000,function(){
	console.log("listen to 3000");
});