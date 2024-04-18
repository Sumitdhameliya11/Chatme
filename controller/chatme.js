const path = require("path");

const chatme = async(req,res)=>{
    const filepath = path.join(__dirname,'../index.html');
    res.sendFile(filepath);
}


module.exports ={
    chatme
};