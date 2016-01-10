var studentController = require("../controllers/student-controller");
var userController = require('../controllers/user-controller');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendfile(__dirname + '../index.html');
	});

	app.get('/students', studentController.findAll);

	app.get('/userRoles', userController.findAll);
	app.post('/userRoles', userController.create);


}