import mongoose from 'mongoose';

export async function dbConnection() {
    try {
        mongoose.set('strictQuery', false);
        const URLhost = "mongodb://127.0.0.1:27017/api";
        let connection = await mongoose.connect(URLhost);
        console.log('Base de datos conectada');
    }   catch (error) {
		console.log(error);
    }
}