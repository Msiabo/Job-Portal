import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    id:{type:String ,required:true},
    name:{type:String ,required:true},
    email:{type:String ,required:true ,unique:true},
    cv:{type:String },
    image:{type:String,required:true },
})

const User = mongoose.model('User' ,userSchema);

export default User