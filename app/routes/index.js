'use strict';
//定义的函数名必须和文件名一致吗
module.exports = function(app){
	app.route("/").get(function(req,res){
	
	res.sendFile(process.cwd()+"/public/index.html");
});
	app.route("/app2-timestamp-copy.herokuapp.com/:data").get(require(process.cwd()+"/app/controllers/date_deal.js")
		//res.send("i will send the human-convinent date");
	);

};
