var blogs = require('./blogs');


module.exports = function(app, db) {
	blogs(app, db)
}