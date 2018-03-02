let $ = require("jquery");
let webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

let chromeCapabilities = webdriver.Capabilities.chrome();
let chromeOptions = {
    'args': ['--disable-notifications']
};
chromeCapabilities.set('chromeOptions', chromeOptions);


let testSites = [
"https://www.loginradius.com/fuel/software-testing-blogs-to-level-up-qa-skills/",
"https://blog.hubspot.com/blog/tabid/6307/bid/34143/12-inspiring-examples-of-beautiful-blog-homepage-designs.aspx",
"https://blog.griddynamics.com/build-diy-magic-mirror-out-of-commodity-hardware-and-ar-tech/",
"https://blog.griddynamics.com/how-arkit-and-arcore-recognize-vertical-planes/",
"https://blog.griddynamics.com/introducing-augmented-reality-for-e-commerce/"
]
async function runDriver(){
  for (let i = 0; i < 1; i++){
  	try{
	  	let driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
	  	let start = await driver.get("https://qatool.000webhostapp.com/")
	  	let enterInput = await driver.findElement(By.xpath('//*[@id="form1"]/input[1]')).sendKeys(testSites[i])
	  	let submit = await driver.findElement(By.xpath('//*[@id="submit1"]')).click()
	  	let checkTextWait = await driver.wait(until.elementLocated(By.xpath('//*[@id="hidemenot1"]')), 3000)
	  	let checkText = driver.findElement(By.xpath('//*[@id="hidemenot1"]')).click()
	  		.catch(err=>{
	  			console.log('fail 1')
	  			let checkText =  setTimeout( ()=> driver.findElement(By.xpath('//*[@id="hidemenot1"]')).click(), 3000 )
	  		})
	  	let iframeWait = await driver.wait(until.elementLocated(By.xpath('//*[@id="checktext1_ifr"]')), 5000)
	  	let iframe = await driver.findElement(By.xpath('//*[@id="checktext1_ifr"]'))

	  	let switchFrames = await setTimeout( () =>{driver.switchTo().frame(iframe); console.log('switch')}, 5000)
	  	let scroll = await driver.executeScript("setTimeout(()=>{var frame_top = $('#checktext1_ifr').contents().find('body').scrollTop(10000);},6000)")

  	}
  	catch(error){
  		console.log(error)
  	}
  }
}

runDriver()