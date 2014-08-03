var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUrl = 'mongodb://localhost/template';
var mongoOptions = {};

mongoose.connect(mongoUrl, mongoOptions, function (err, res) {
    if (err) { 
        console.log('[DB] Connection failed to ' + mongoUrl + '. ' + err);
    } else {
        console.log('[DB] Successfully connected to: ' + mongoUrl);
    }
});

// Define Schemas
var MySchema = new Schema({
	uid: { type: Schema.Types.ObjectId, required: true },
	field: { type: String, required: true },
	created: { type: Date, default: Date.now }
});

// Export Models
exports.MySchemaModel = mongoose.model('MySchema', MySchema);