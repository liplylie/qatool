let webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

let chromeCapabilities = webdriver.Capabilities.chrome();
let chromeOptions = {
    'args': ['--disable-notifications']
};
chromeCapabilities.set('chromeOptions', chromeOptions);

async function runDriver(){
  let driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
  let start = await driver.get("https://qatool.000webhostapp.com/")
 }

runDriver()