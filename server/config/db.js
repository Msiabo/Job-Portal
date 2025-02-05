import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
           
            tls: true,   // ✅ Use TLS (default for MongoDB Atlas)
        });

        console.log("✅ Database Connected Successfully!");
    } catch (error) {
        console.error("❌ Database Connection Error:", error);
        process.exit(1);
    }
};

export default connectToDb;
