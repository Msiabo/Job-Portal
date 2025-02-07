import mongoose from "mongoose";

// Function to connect to db
const connectDB = async () => {
    try{
        mongoose.connection.on(('connected'), ()=> console.log('Database Connected Successfully'))

        await mongoose.connect(`${process.env.MONGO_URI}/career-link`)
    }
    catch{
        console.log('Database Connection Failed')
    }
    
}
export default connectDB