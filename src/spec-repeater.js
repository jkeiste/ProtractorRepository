//CONSTANTS:
var add = "ADDITION";
var divide = "DIVISION";
var mod = "MODULO";
var multiply = "MULTIPLICATION";
var subtract = "SUBTRACTION";

describe('Chain locators demo', function() {
    it('Should verify the result of a single addition calculation', function() {
        GoToDemoSite();
        Calculate(3, 5, add);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("8");
    });

    it('Should verify the result of a single division calculation', function() {
        GoToDemoSite();
        Calculate(15, 5, divide);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("3");
    });

    it('Should verify the result of a single modulus calculation', function() {
        GoToDemoSite();
        Calculate(10, 5, mod);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("0");
    });

    it('Should verify the result of a single multiplication calculation', function() {
        GoToDemoSite();
        Calculate(3, 7, multiply);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("21");
    });

    it('Should verify the result of a single subtraction calculation', function() {
        GoToDemoSite();
        Calculate(20, 5, subtract);
        var result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        expect(result).toBe("15");
    });
    
    it('Should verify calculations are listed in a table and output the results of each', function() {
        GoToDemoSite();
        Calculate(5, 5, add);
        Calculate(15, 2, subtract);
        Calculate(2, 6, multiply);
        Calculate(15, 3, divide);
        expect(element.all(by.repeater("result in memory")).count()).toEqual(4);
        element.all(by.repeater("result in memory")).each(function(item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
            });
        });
    });

    it('Should verify calculations are listed in a table and output the second result', function() {
        GoToDemoSite();
        Calculate(2, 5, add);
        Calculate(7, 3, subtract);
        Calculate(6, 6, multiply);
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

    function Calculate(a, b, operator) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element.all(by.tagName("option")).each(function(item) {
            item.getAttribute("value").then(function(value) {
                if (value == operator)
                {
                    item.click();
                }
            });
        });
        element(by.id("gobutton")).click();
    };   
});