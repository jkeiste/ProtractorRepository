describe('Chain locators demo', function() {
    it('Should verify the result of a single addition calculation', function() {
        GoToDemoSite();
        Add(3, 5);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("8");
    });

    it('Should verify the result of a single division calculation', function() {
        GoToDemoSite();
        Divide(15, 5);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("3");
    });

    it('Should verify the result of a single modulus calculation', function() {
        GoToDemoSite();
        Modulus(10, 5);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("0");
    });

    it('Should verify the result of a single multiplication calculation', function() {
        GoToDemoSite();
        Multiply(3, 7);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("21");
    });

    it('Should verify the result of a single subtraction calculation', function() {
        GoToDemoSite();
        Subtract(20, 5);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("15");
    });
    
    it('Should verify calculations are listed in a table and output the results of each', function() {
        GoToDemoSite();
        Add(5, 5);
        Subtract(15, 2);
        Multiply(2, 6);
        Divide(15, 3);
        expect(element.all(by.repeater("result in memory")).count()).toEqual(4);
        element.all(by.repeater("result in memory")).each(function(item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
            });
        });
    });

    it('Should verify calculations are listed in a table and output the second result', function() {
        GoToDemoSite();
        Add(2, 5);
        Subtract(7, 3);
        Multiply(6, 6);
        var results = element.all(by.repeater("result in memory"));
        expect(results.count()).toEqual(3);        
        results.get(1).element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
        });
    });

    //BEGIN HELPER FUNCTIONS SECTION:
    function GoToDemoSite() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };

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