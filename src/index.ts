import express from 'express'
const app = express()
const PORT = 3000;
app.get("/home",(req,res)=>{
    res.send("hello world");
    //..server informaion//.
})
app.listen(PORT,()=>{
    console.log("server is running on port",PORT);
});