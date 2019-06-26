var express = require('express');
var router = express.Router();
var infoCompany = require("./infoCompany.js")
var mongo = require("mongodb");
const assert = require('assert');
const pathMongodb = require("./mongodb.path.js");

function valEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

router.post('/', function(req, res, next) {
	console.log(req.body);
	mongo.connect(pathMongodb,(err, db)=>{
		if(!err){
			db.collection("regisLoanAdvice").insertOne(req.body, {ordered:false}, (err, result)=>{
				db.close();
				res.render("success",
					{
						infoCompany:infoCompany, 
						status:"", 
						msg:"Cảm ơn quý khách đã tin tưởng chúng tôi!",
						"events":"goHome()", 
						"btn":"Về trang chủ"
					});
			});
		}
	})
});

module.exports = router;
