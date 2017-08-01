const Todos = require('../models/todoModel');

module.exports = function(app) {

  app.get('/api/setupTodos', function(req, res) {

    // seed database
    const starterTodos = [
      {
        username: 'test',
        todo: 'Buy eggs',
        isDone: false,
        hasAttachment: false
      },
       {
        username: 'test1',
        todo: 'Buy eggs',
        isDone: false,
        hasAttachment: false
      },
       {
        username: 'test2',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false
      },
       {
        username: 'test3',
        todo: 'Buy bread',
        isDone: false,
        hasAttachment: false
      },
    ];
    Todos.remove.Drop({}, function(err) {
      console.log('collection removed')
    });
    
    Todos.create(starterTodos, function(err, results) {
      res.send(results);
    });
  });
}
