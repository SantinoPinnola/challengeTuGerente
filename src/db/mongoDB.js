import mongoose from 'mongoose';
import config from '../config/config.js';

export async function dbConnection() {
    try {
        mongoose.set('strictQuery', false);
        const URLhost = config.MONGODB_URI ;
        let connection = await mongoose.connect(URLhost, {
          dbName: config.DB_NAME
        });
        console.log('Base de datos conectada:', config.DB_NAME);
    }   catch (error) {
		console.log(error);
    }
}