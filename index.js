//app create
const express=require("express");
const app=express();

//port find
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware add

app.use(express.json());
const fileUpload=require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


// db se connection
const db=require("./config/database");
db.connect();

// cloud se connection 
const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route mount
const Upload=require("./routes/FileUpload");
app.use('/api/v1/upload',Upload);

//activated servser
app.listen(PORT,()=>{
    console.log(`APP is running ar ${PORT}`);
})