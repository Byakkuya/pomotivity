// make tests for the todolist.js file

// import the todolist.js file
const todolist = require('../TodoList.js');

// import the assert module
const assert = require('assert');

// create a test suite
describe('todolist', function() {
  // create a test
  it('should be able to add a todo', function() {
    // create a new todo list
    const list = todolist.create();
    // add a todo to the list
    list.add('Buy milk');
    // check that the todo list has one todo
    assert.equal(list.count(), 1);
  });
});
 

//test remove function
describe('todolist', function() {
    // create a test
    it('should be able to remove a todo', function() {
        // create a new todo list
        const list = todolist.create();
        // add a todo to the list
        list.add('Buy milk');
        // remove a todo from the list
        list.remove('Buy milk');
        // check that the todo list has one todo
        assert.equal(list.count(), 0);
    });
    });


    

