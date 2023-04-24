//make test for the pomodoroClock.js file

//import the pomodoroClock.js file
const pomodoroClock = require('../PomodoroClock.js');

//import the assert module
const assert = require('assert');

//create a test suite
describe('pomodoroClock', function() {
    //create a test
    it('should be able to start a pomodoro', function() {
        //create a new pomodoro clock
        const clock = pomodoroClock.create();
        //start a pomodoro
        clock.start();
        //check that the pomodoro clock is running
        assert.equal(clock.isRunning(), true);
    });
});

//test pause function
describe('pomodoroClock', function() {
    //create a test
    it('should be able to pause a pomodoro', function() {
        //create a new pomodoro clock
        const clock = pomodoroClock.create();
        //start a pomodoro
        clock.start();
        //pause a pomodoro
        clock.pause();
        //check that the pomodoro clock is not running
        assert.equal(clock.isRunning(), false);
    });
});

//test reset function
describe('pomodoroClock', function() {
    //create a test
    it('should be able to reset a pomodoro', function() {
        //create a new pomodoro clock
        const clock = pomodoroClock.create();
        //start a pomodoro
        clock.start();
        //reset a pomodoro
        clock.reset();
        //check that the pomodoro clock is not running
        assert.equal(clock.isRunning(), false);
    });
});

//test stop function
