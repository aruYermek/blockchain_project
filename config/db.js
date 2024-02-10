// Подключение библиотеки mongoose
const mongoose = require("mongoose");

// Асинхронная функция для подключения к MongoDB
const connectDB = async () => {
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected to ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = {
    connectDB
};
