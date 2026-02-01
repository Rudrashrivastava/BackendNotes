const mongoose=require('mongoose');

const noteSchema=new mongoose.Schema({
    title:String,
    mode:String
})




const noteModel=mongoose.model("NOTES",noteSchema);

module.exports=noteModel;