const fs = require('fs');
const path = require('path');



function walkDir(dir, callback) {
    // fs.readdirSync(dir).filter(f =>{
    //     let dirPath = path.join(dir, f);
    //     let isDirectory = fs.statSync(dirPath).isDirectory();
    //     isDirectory ?
    //        walkDir(dirPath, callback) : callback(path.join(dir, f));
    // })
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
};
walkDir(__dirname, function (filePath) {
    console.log(filePath);
    let data = require(filePath)
    console.log(data)
});



const controller = (app) =>{
    const router = require('express').Router();
    app.use("/",router)
}
module.exports = {controller}
