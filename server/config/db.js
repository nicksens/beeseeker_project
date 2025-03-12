import mongoose from "mongoose";

// Function to connect to mongodb database
const connectDB = async() => {

    mongoose.connection.on('connected', () => console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/beeseeker`)
}

export default connectDB