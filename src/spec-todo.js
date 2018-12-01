//describe:
//first parameter - test suite name
//second parameter - function (function will have all tests [it blocks])
//it:
//first parameter - test case name
//second parameter - function (function will have all test steps)

describe('Protractor Demo App', function() {
  it('Open AngularJS demo website', function() {
    //Protractor code goes here
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5");
    element(by.id("gobutton")).click();
    element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
      console.log(text);
    });
  });
});
