import app from "./app.js";

import { connetDB } from "./config/database.js";
import cloudinary  from 'cloudinary';

// import mongoose from "mongoose";

// mongoose.set('strictQuery', false);

connetDB();

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_CLIENT_API,
    api_secret:process.env.CLOUDINARY_CLIENT_SECRET
    
});

app.listen(process.env.PORT, () =>{
    console.log(`server is working on port: ${process.env.PORT}`);
});