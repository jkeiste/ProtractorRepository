describe('Chain locators demo', function() {
    it('Outputs result of single addition calculation', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        Add(3, 5);
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
            console.log(text);
        });
    });

    it('Outputs result of single division calculation', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        Divide(15, 5);
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
            console.log(text);
        });
    });

    it('Outputs result of single modulus calculation', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        Modulus(10, 5);
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
            console.log(text);
        });
    });

    it('Outputs result of single multiplication calculation', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        Multiply(3, 7);
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
            console.log(text);
        });
    });

    it('Outputs result of single subtraction calculation', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        Subtract(20, 5);
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
            console.log(text);
        });
    });
    
    it('Outputs result of each calculation using repeater locator method', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        Add(5, 5);
        Subtract(15, 2);
        Multiply(2, 6);
        Divide(15, 3);
        element.all(by.repeater("result in memory")).each(function(item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
            });
        });
    });

    it('Outputs result of second calculation only using repeater locator method', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        Add(2, 5);
        Subtract(7, 3);
        Multiply(6, 6);
        var results = element.all(by.repeater("result in memory"));
        results.get(1).element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
        });
    });

    //BEGIN HELPER METHOD SECTION:
    function Add(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("operator")).element(by.css("option:nth-child(1)")).click();
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    };

    function Divide(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("operator")).element(by.css("option:nth-child(2)")).click();
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    };

    function Modulus(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("operator")).element(by.css("option:nth-child(3)")).click();
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    };

    function Multiply(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    };

    function Subtract(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("operator")).element(by.css("option:nth-child(5)")).click();
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    };
});