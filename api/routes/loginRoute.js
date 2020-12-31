'use strict';
module.exports = function(app) {
  var login = require('../controllers/loginController');

  app.route('/login')
    .get(login.getUser)
    .post(login.checkUser);


//   app.route('/tasks/:taskId')
//     .get(login.read_a_task)
//     .put(login.update_a_task)
//     .delete(login.delete_a_task);
};