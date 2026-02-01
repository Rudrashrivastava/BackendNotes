/*
code liko databse aur mongodb ka 
*/
require("dotenv").config();
const mongoose=require('mongoose');

function connectTODb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to Database");
        
    })
}


module.exports=connectTODb;