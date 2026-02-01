/*
server create krna
server config krna
*/
const express=require('express');

const app=express();
app.use(express.json());

const noteModel=require('./model/note.model')

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/api/notes",async (req,res)=>{

const {title,mode}=req.body;

const note=await noteModel.create({
    title,
    mode
})

res.status(201).json({
    message:"Created succesfully"
})

})


app.get("/api/notes",async(req,res)=>{
 const note=await noteModel.find();

 res.send(note);

 res.status(200).json({
    message:"fetched successfully"
 })

})


app.patch("/api/notes/:id",async (req,res)=>{
const id=req.params.id;
const {mode}=req.body
await noteModel.findByIdAndUpdate(id,{mode})

res.status(200).json({
    message:"updated succesfully"
})
})

app.delete("/api/notes/:id",async (req,res)=>{
    const id=req.params.id;

    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"deleted succesfully"
    })
})



module.exports=app;