for(var i=1; i<=1; i++){
    var myArray = ["test1","test2"]; //Ganti Sesuai Kata Yg kalian mau
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];



const { IgApiClient } = require('instagram-private-api')
require('dotenv').config()
const { readFile, read }= require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)


const ig = new IgApiClient()



const postimage = async () => {
    try { 
        ig.state.generateDevice(process.env.IG_USERNAME)
        await ig.simulate.preLoginFlow()
        const user = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD) 

        // Test Upload
        const path = './a.jpg'
        const published = await ig.publish.photo({
            file: await readFileAsync(path),
            caption: await randomItem
        
        })
        
        console.log(published)
    } catch (error) {
        console.log(error)
    }
}


postimage()

}

