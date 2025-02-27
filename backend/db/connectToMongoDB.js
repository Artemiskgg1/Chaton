import mongoose from "mongoose";

const connectToMongoDB = async () => {
  if (!process.env.MONGO_DB_URI) {
    console.error("❌ MongoDB URI is undefined! Check your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectToMongoDB;
