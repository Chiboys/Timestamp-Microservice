var express = require('express');
var route = require('./app/routes/index.js');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use('/public', express.static(process.cwd() + '/public'));
route(app);
app.listen(app.get('port'), function() {
	console.log("listen to 3000");
});