function config(client){
    const fs = require("fs")
    fs.writeFile("./config.json", JSON.stringify(client.config, null, 2), err => {
        if(err){
            console.log(err)
        } else{
            console.log("Done!")
        }
    })
}


module.exports = {config}