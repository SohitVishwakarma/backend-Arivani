import mongoose from "mongoose";
// require('dotenv').config();
// import {} from 'dotenv';




const MONGODB_URI = "mongodb+srv://isohitv:kjRDKM9Tohl8dk9X@cluster0.0ecxqbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connect = async () => {
    try {
        if(MONGODB_URI){
        await mongoose.connect(MONGODB_URI)
    
        console.log("MongoDB connected");
        }
    } catch (error) {
        console.log("Not Connected", error);
       
    }
}

export default connect