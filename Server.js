/*
server start  krna
server ko db se connect krna
*/

const app=require("./src/app")
const connectTODb=require("./src/config/database");

connectTODb();
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})