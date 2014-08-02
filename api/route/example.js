exports.read = function(req, res) {
	var id = req.params.id;

	return res.send(200, {data: "Hello world!"});
}

exports.create = function(req, res) {
	var data = req.body.data;

	return res.send(200);
}

exports.edit = function(req, res) {
	var data = req.body.data;

	return res.send(200);
}

exports.delete = function(req, res) {
	var id = req.params.id;
	
	return res.send(200);
}