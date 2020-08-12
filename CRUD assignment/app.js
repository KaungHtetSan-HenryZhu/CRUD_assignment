var session = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./database');
var querystring = require('querystring');

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));

//==========    GET   ====================
app.get('/', function(req, res){
  res.render("login",{ postData:"" });
});

//== get admin
app.get("/admin", function(req, res){
  res.render("admin",{ postData:"" });
});

//== get signup
app.get('/signup', function(req, res){
  res.render("signup", { postData:"" } );
});

//== get Store
app.get('/store', function(req, res){

  var warehouseId = req.query.warehouseid;
	var sql = "Select * from store where warehouse_id="+warehouseId;
  db.query(sql, function (err, data, fields){
 		if(err) throw err;
 		res.render('store', { requestdata: data, title: warehouseId });
  	res.end();
	});//
});

//== get Home
app.get('/home', function(req, res){

	var sql = "Select * from warehouses";
  db.query(sql, function (err, data, fields){
 		if(err) throw err;
 		res.render('home', { requestdata: data });
  	res.end();

});//

});

//== get add item
app.get('/add_item', function(req, res){
			var sql = "Select * from warehouses";
		  db.query(sql, function (err, data, fields){
		 		if(err) throw err;
		 		res.render('addItem', { requestdata: data });
		  	res.end();
			});//
});

//==get update quantity
app.get('/update_qty', function(req,res){

	var item_id = req.query.item_id;
	var sql = "Select * from store where id="+item_id;
	db.query(sql, function (err, data, fields){
		if(err) throw err;
		res.render('updateqty', { requestdata: data });
		res.end();
	});//

});

//==get accounts Admin
app.get('/accounts', function(req, res){

	var sql = "Select * from accounts";
  db.query(sql, function (err, data, fields){
 		if(err) throw err;
 		res.render('accounts',{ requestdata:data, title:"User Accounts" });
  	res.end();
	});//

});



//==========     POST    ========================
app.post('/',function(req,res){

	username = req.body.userId;
	psw = req.body.password;

	var sql="SELECT * FROM accounts WHERE name ='"+username+"' AND password ='"+psw+"'";

	if (username && psw) {

		db.query(sql, function(error, data, fields) {
			if (data.length > 0) {
					res.redirect('/home');
          res.end();
			}
		 else {
				res.render('login', { postData: "Error" });
			}
			res.end();
		});
	}//username password
	else {
		res.render('login', { postData: "Error" });
		res.end();
	}
  });

//== post Home
app.post('/home',function(req,res){

		var reqId = req.body.btnId;
    res.redirect('/store?warehouseid='+reqId);
    res.end();

});

//== post Signup
app.post('/signup', function(req,res){

	   var username = req.body.userId;
		 var psw = req.body.password;
		 var conpsw = req.body.confirmpassword;

		 if(psw==conpsw){
		 var sql = "INSERT INTO accounts (name, password) VALUES ('"+username+"','"+psw+"')";
		 db.query(sql, function(err, result){
			 if(err) throw err;
			 console.log("inserted");
			 res.redirect('/home');
		 });
	 }//psw=conpsw

	 else{
			 res.render('signup', { postData:'error' });
	 }//else
});

//== Post Store
app.post('/store', function(req,res){

     var itemId = req.body.btnId;
     var warehouseId = req.body.warehouseid;

		 var sql = "delete from store where id="+itemId+" ";
		 db.query(sql, function(err, result){
			 if(err) throw err;
			 console.log("deleted");
			 res.redirect('/store?warehouseid='+warehouseId);
		 });
});

//== post add_item
app.post('/add_item', function(req, res){

	var itemName = req.body.itemName;
	var companyName= req.body.companyName;
	var warehouseid = req.body.selectWarehouse;
	var category = req.body.selectCategory;
	var qty	= req.body.qty;
	var qtypac= req.body.qtyPerpac;

	var sql = "Insert into store (name, category, qty, qty_per_pack,warehouse_id, company) values ('"+itemName+"','"+category+"', "+qty+","+qtypac+", "+warehouseid+",'"+companyName+"' )";
	db.query(sql, function(err, result){
		if(err) throw err;
		console.log("added");
		res.redirect('/store?warehouseid='+warehouseid);
	});
});

//== post update quantity
app.post('/update_qty', function(req, res){

	var id = req.body.itemid;
	var qty = req.body.finalqty;
  var wid = req.body.warehouseid;
	console.log(id);
	console.log(qty);

	var sql = "update store set qty="+qty+" where id="+id;
	db.query(sql, function(err, result){
		if(err) throw err;
		console.log("updated");
		res.redirect('/store?warehouseid='+wid);
	});

});

//==post admin
app.post('/admin',function(req,res){
  console.log("admin");
	username = req.body.userId;
	psw = req.body.password;

	var sql="SELECT * FROM admin WHERE name ='"+username+"' AND password ='"+psw+"'";

	if (username && psw) {

		db.query(sql, function(error, data, fields) {
			if (data.length > 0) {
					res.redirect('/accounts');
          res.end();
			}
		 else {
				res.render('admin', { postData: "Error" });
			}
			res.end();
		});
	}//username password
	else {
		res.render('admin', { postData: "Error" });
		res.end();
	}
  });


  //== Post Accounts
  app.post('/accounts', function(req,res){

       var id = req.body.btnId;

  		 var sql = "delete from accounts where id="+id+" ";
  		 db.query(sql, function(err, result){
  			 if(err) throw err;
  			 console.log("deleted");
  			 res.redirect('/accounts');
  		 });
  });

app.listen(3000);
