var express=require("express"),
	app=express(),
	request = require('request');
app.set("view engine", "ejs");
app.get("/location", function(req,res){
	request('http://api.open-notify.org/iss-now.json',function(error,response,body){
		if(!error && response.statusCode==200){
			var parsedData = JSON.parse(body);
			console.log(parsedData);
			res.render("location",{ddata: parsedData});
		}
	});
});
app.get("/details", function(req,res){
	request('http://api.open-notify.org/astros.json',function(error,response,body){
		if(!error && response.statusCode==200){
			var parsedData = JSON.parse(body);
			console.log(parsedData);
			res.render("details",{pdata: parsedData});
		}
	});
});
app.listen(3000, function(){
	console.log("ISS_LOCATION PLOTTER (SERVER ON on PORT 3000)");
});