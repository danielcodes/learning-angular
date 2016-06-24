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



