const fs = require('fs')
const yargs = require('yargs')

let filename = yargs.argv.filename
let fileArray = []

// take the filename from cmd line
//get array from filenames.txt file
//save the array and check whether the file name exists in that array or not
//if yes throw err
//else add new file name to that array and save 
// and create this new file and write you are awesome

fs.readFile('filenames.txt', function(err, data){
    if(err)
    console.log(err)

    else
    fileArray = data.toString()

    if(fileArray.includes(filename)){
    console.log("file name already created")
    console.log(fileArray)
    return console.error()}


    else
    fs.writeFile(filename, 'you are awesome', function(error,data){
        console.log("you are awesome has been written in file")
    })

    fs.appendFile('filenames.txt', '\n'+filename,function(err,data){
        if (err)
         console.error(err)
        else
        console.log(" file name added to filenames.txt")
        
    })

})
