//This test demonstrates a synchronization method on non-angular websites

describe('Protractor Synchronization Steps', function() {
	it('Opens NonAngular JS Website Sync', function() {
		browser.waitForAngularEnabled(false);
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		element(by.css("a[href*='loadAjax']")).click();
		//Begin sync (wait for expected conditions to be true)
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);
		element(by.id("results")).getText().then(function(text) {
			console.log(text);
		})
	})
})