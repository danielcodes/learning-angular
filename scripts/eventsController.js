//using filesystem, ohh
var fs = require('fs');

module.exports.get = function(req, res){
	
	//grab whatever data set from fs
	var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');

	//sending back json
	res.setHeader('Content-Type', 'application/json');
	res.send(event);

};

module.exports.save = function(req, res){
	
	//whats in the body of request?
	var event = req.body;

	fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));

	res.send(event);
};

module.exports.getAll = function(req, res){
	
	var path = 'app/data/event/';

	var files = [];
	try {
		files = fs.readdirSync(path);	
		console.log(files);
	}
	catch (e){
		console.log(e);
		res.send('[]');	
		res.end();
	}

	var results = "[";
	for(var idx=0; idx < files.length; idx++){
		if(files[idx].indexOf(".json") == files[idx].length - 5){
			results += fs.readFileSync(path + "/" + files[idx]) + ",";	
		}
	}

	results = results.substr(0, results.length - 1);
	results += "]";

	res.setHeader('Content-Type', 'application/json');
	res.send(results);
	res.end();

};


