let $ = require("jquery");
let webdriver = require("selenium-webdriver"),
	By = webdriver.By,
	until = webdriver.until;

let chromeCapabilities = webdriver.Capabilities.chrome();
let chromeOptions = {
	args: ["--disable-notifications"]
};
chromeCapabilities.set("chromeOptions", chromeOptions);

let testSites = [
	"http://www.lipsum.com",
	"https://blog.hubspot.com/blog/tabid/6307/bid/34143/12-inspiring-examples-of-beautiful-blog-homepage-designs.aspx",
	"https://blog.griddynamics.com/build-diy-magic-mirror-out-of-commodity-hardware-and-ar-tech/",
	"https://blog.griddynamics.com/how-arkit-and-arcore-recognize-vertical-planes/",
	"https://blog.griddynamics.com/introducing-augmented-reality-for-e-commerce/"
];
async function runDriver() {
	for (let i = 0; i < testSites.length; i++) {
		try {
			let driver = new webdriver.Builder()
				.withCapabilities(chromeCapabilities)
				.build();
			let start = await driver.get("https://qatool.000webhostapp.com/");
			let enterInput = await driver
				.findElement(By.xpath('//*[@id="form1"]/input[1]'))
				.sendKeys(testSites[i]);
			let submit = await driver
				.findElement(By.xpath('//*[@id="submit1"]'))
				.click();
			let checkTextWait = await driver.wait(
				until.elementLocated(By.xpath('//*[@id="hidemenot1"]')),
				3000
			);
			let checkText = driver.executeScript(
				"document.getElementById('hidemenot1').click()"
			);

			let scroll = await driver.executeScript(
				"setTimeout(()=>{let frame_top = $('#checktext1_ifr').contents().find('body').scrollTop($('#checktext1_ifr').contents().find('body').height());},3000)"
			);
			let finishSpellCheck = await driver.executeScript(
				"document.getElementById('finishSpellGrammar').click()"
			);
			let clickAlert = await driver
				.switchTo()
				.alert()
				.accept();
			let clickAlert2 = await driver
				.switchTo()
				.alert()
				.accept();

			let scroll2 = await driver.executeScript(
				"setTimeout(()=>{let frame_top = $('#checktext1_ifr').contents().find('body').scrollTop($('#checktext1_ifr').contents().find('body').height());},1000)"
			);
			let finishFormatCheck = await driver.executeScript(
				"document.getElementById('finishFormat').click()"
			);
			let clickAlert3 = await driver
				.switchTo()
				.alert()
				.accept();
			let clickAlert4 = await driver
				.switchTo()
				.alert()
				.accept();

			let scroll3 = await driver.executeScript(
				"setTimeout(()=>{let frame_top = $('#checktext1_ifr').contents().find('body').scrollTop($('#checktext1_ifr').contents().find('body').height());},1000)"
			);
			let finishCapCheck = await driver.executeScript(
				"document.getElementById('completeCaps').click()"
			);

			let clickAlert5 = await driver
				.switchTo()
				.alert()
				.accept();
			let clickAlert6 = await driver
				.switchTo()
				.alert()
				.accept();

			let finishLinkCheck = await driver
				.findElement(By.xpath('.//*[@id="completeLinks"]'))
				.click();
			let clickAlert7 = await driver
				.switchTo()
				.alert()
				.accept();
			let clickAlert8 = await driver
				.switchTo()
				.alert()
				.accept();
			let finishMobileCheck = await driver
				.findElement(By.xpath('.//*[@id="finishMobileCheck"]'))
				.click();
			let clickAlert9 = await driver
				.switchTo()
				.alert()
				.accept();
			let clickAlert10 = await driver
				.switchTo()
				.alert()
				.accept();
			let finishImageCheck = await driver
				.findElement(By.xpath('.//*[@id="finishImageText"]'))
				.click();
			let clickAlert11 = await driver
				.switchTo()
				.alert()
				.accept();
			let clickAlert12 = await driver
				.switchTo()
				.alert()
				.accept();
			let finishMetaCheck = await driver
				.findElement(By.xpath('.//*[@id="finishMetaInfo"]'))
				.click();
			let clickAlert13 = await driver
				.switchTo()
				.alert()
				.accept();
			let clickAlert14 = await driver
				.switchTo()
				.alert()
				.accept();
		} catch (error) {
			console.log(error);
		}
	}
}

runDriver();
