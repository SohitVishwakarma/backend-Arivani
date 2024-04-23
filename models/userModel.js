import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    subject:String
  });
  const User = mongoose.model('User', userSchema);
  export default User;