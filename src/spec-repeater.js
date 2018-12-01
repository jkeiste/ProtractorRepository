describe('Chain locators demo', function() {
    it('Outputs result of single addition calculation using repeater locator method', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
            console.log(text);
        });
    });

    it('Outputs result of single multiplication calculation by chaining locator methods', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
            console.log(text);
        });
    });
    
    it('Outputs result of each calculation using repeater locator method', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();
        element.all(by.repeater("result in memory")).each(function(item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
            });
        });
    });

    it('Outputs result of second calculation only using repeater locator method', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3");
        element(by.id("gobutton")).click();
        var results = element.all(by.repeater("result in memory"));
        results.get(1).element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
        });
    });
});