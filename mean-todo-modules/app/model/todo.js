var mongoose = require('mongoose');


var todoSchema =  new mongoose.Schema ({
  task: { type: String,  default: '' },
  titel: { type: String,  default: '' }
});


module.exports = mongoose.model('Todo', todoSchema);

