import app from "./app.js";

import { connetDB } from "./config/database.js";
// import mongoose from "mongoose";

// mongoose.set('strictQuery', false);

connetDB();

app.listen(process.env.PORT, () =>{
    console.log(`server is working on port: ${process.env.PORT}`);
});