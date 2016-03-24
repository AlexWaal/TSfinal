var Todo = require('./model/todo');

module.exports = function (app) {

  app.get('/todos', function (req, res) {
    Todo.find(function (err, todos) {
      if (err) res.send(err);
      else res.json(todos);
    });
  });

  app.post('/todo', function (req, res) {
    var newTodo = new Todo({task: req.body.task, titel: req.body.titel, author: req.body.author, comment: req.body.comment, type: req.body.type });

    newTodo.save(function (err) {
      if (err)res.send(err);
      res.status(200).end();
    });

  });

  app.delete('/todo/:id', function (req, res) {
    Todo.remove({
      _id: req.params.id
    }, function (err, todo) {
      if (err)
        res.send(err);
      res.status(200).end();
    });
  });

};