//This test covers keyboard commands for search form auto-complete (ARROW_DOWN, ENTER)
//This test also covers switching focus to new tabs when opened (Handles)

describe('Actions demo',function() {  
    it('Should search a website using auto-complete and keyboard commands',function() {
        browser.get("https://posse.com/");
        element(by.model("userInputQuery")).sendKeys("River");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("Lond")).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
            browser.sleep(2000);
            expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
            element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
            element(by.css("a[ng-href*='London/River Island']")).click().then(function() {
                browser.getTitle().then(function(title) {
                    console.log("Parent Page: " + title);
                    browser.getAllWindowHandles().then(function(handles) {
                        //Switch to newly opened tab:
                        browser.switchTo().window(handles[1]);
                        browser.getTitle().then(function(title) {
                            console.log("Child Page: " + title);
                            //Switch back to main tab:
                            browser.switchTo().window(handles[0]);
                            browser.getTitle().then(function(title) {
                                console.log("Parent Page: " + title);
                            });
                        });
                    });
                });
            });
        });
    });
});