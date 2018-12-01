//describe:
//first parameter - test suite name
//second parameter - function (function will have all tests [it blocks])
//it:
//first parameter - test case name
//second parameter - function (function will have all test steps)

describe('Protractor Demo App', function() {
  it('Open AngularJS website', function() {
    //Protractor code goes here
    browser.get('https://angularjs.org');
    browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
      console.log("I am the last step to execute.");
    });
  });
});
