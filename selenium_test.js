// documentation link - https://www.selenium.dev/selenium/docs/api/javascript/

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

async function testGoogleTitle() {
    // 1. go to google.com
    await driver.get('http://www.google.com')

    // 2. find the search bar by name. (You can also findElement by Id, or className
    let googleSearchBar = await driver.findElement(webdriver.By.name('q'))
    
    // 3. type in "webdriver" and wait 1 sec
    await googleSearchBar.sendKeys('webdriver')
    await driver.sleep(1000)

    // 4. press enter and wait 1 sec for the search results to load up
    await googleSearchBar.sendKeys(webdriver.Key.RETURN)
    await driver.sleep(1000)

    // 5. grab the title and compare it with the EXPECTED title
    let pageTitle = await driver.getTitle()
    if(pageTitle === 'webdriver - Google Search') {
        // 6. execute a little front-end javascript alert
        await driver.executeScript(`alert("success");`)
        // 7. wait 3 seconds before ending the test
        await driver.sleep(3000)
        console.log('*****Test passed******');
    } else {
        console.log('Test failed :(:(:(:(:(:(');
    }

    await driver.quit();
}

testGoogleTitle()