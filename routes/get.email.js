var express = require('express');
var router = express.Router();
var mongo = require("mongodb");
var path = require("./mongodb.path");

/* GET home page. */
router.get('/', function(req, res, next) {
	mongo.connect(path,(err, db)=>{
		if(db){
			db.collection("emailClient").find().toArray((err,result)=>{
				if(!err){
	  				res.render('adminViewEmail',{result:result});
				}else{
					res.render("error")
				}
			})
		}else{
			res.render("error")
		}
	})
});

module.exports = router;