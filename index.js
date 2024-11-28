import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/testdb", () =>{
    console.log("connected")
});
