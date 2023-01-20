import dotenv from 'dotenv';
dotenv.config()

export default {
    PORT: process.env.PORT || 8080,
    MONGODB_URI : process.env.MONGO_LOCAL_URI || 'mongodb://127.0.0.1:27017/',
    DB_NAME :  process.env.MONGO_LOCAL_DBNAME || 'mongoDBLocalName'
};