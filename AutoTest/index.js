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
			let checkText = driver
				.findElement(By.xpath('//*[@id="hidemenot1"]'))
				.click()
				.catch(err => {
					console.log("fail 1");
					let checkText = setTimeout(
						() => driver.findElement(By.xpath('//*[@id="hidemenot1"]')).click(),
						3000
					);
				});

			let scroll = await driver.executeScript(
				"setTimeout(()=>{let frame_top = $('#checktext1_ifr').contents().find('body').scrollTop($('#checktext1_ifr').contents().find('body').height());},5000)"
			);
			let finishSpellCheck = await setTimeout(() => {
				driver.findElement(By.xpath('//*[@id="finishSpellGrammar"]')).click();
			}, 10000);
			let clickAlert = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 11000);
			let clickAlert2 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 11400);

			let scroll2 = await setTimeout(() => {
				driver.executeScript(
					"setTimeout(()=>{let frame_top = $('#checktext1_ifr').contents().find('body').scrollTop($('#checktext1_ifr').contents().find('body').height());},1000)"
				);
			}, 12000);
			let finishFormatCheck = await setTimeout(() => {
				driver.findElement(By.xpath('//*[@id="finishFormat"]')).click();
			}, 14000);
			let clickAlert3 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 15000);
			let clickAlert4 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 15500);

			let scroll3 = await setTimeout(() => {
				driver.executeScript(
					"setTimeout(()=>{let frame_top = $('#checktext1_ifr').contents().find('body').scrollTop($('#checktext1_ifr').contents().find('body').height());},1000)"
				);
			}, 15900);
			let finishCapCheck = await setTimeout(() => {
				driver.findElement(By.xpath('//*[@id="completeCaps"]')).click();
			}, 17300);
			let clickAlert5 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 17400);
			let clickAlert6 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 17700);

			let finishLinkCheck = await setTimeout(() => {
				driver.findElement(By.xpath('.//*[@id="completeLinks"]')).click();
			}, 18000);
			let clickAlert7 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 18300);
			let clickAlert8 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 18700);
			let finishMobileCheck = await setTimeout(() => {
				driver.findElement(By.xpath('.//*[@id="finishMobileCheck"]')).click();
			}, 19000);
			let clickAlert9 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 19300);
			let clickAlert10 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 19700);
			let finishImageCheck = await setTimeout(() => {
				driver.findElement(By.xpath('.//*[@id="finishImageText"]')).click();
			}, 20000);
			let clickAlert11 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 20300);
			let clickAlert12 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 20700);
			let finishMetaCheck = await setTimeout(() => {
				driver.findElement(By.xpath('.//*[@id="finishMetaInfo"]')).click();
			}, 21000);
			let clickAlert13 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 21300);
			let clickAlert14 = await setTimeout(() => {
				driver
					.switchTo()
					.alert()
					.accept();
			}, 21700);
		} catch (error) {
			console.log(error);
		}
	}
}

runDriver();