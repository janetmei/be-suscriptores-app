import mongoose from "mongoose";
import { DB_URI } from '../config/env.js';

if (!DB_URI) {
    throw new Error('Define la variable de entorno MONGODB_URI en el interior .env.<development/production>.local')
};

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);

        console.log('Conectado a la base de datos MongoDB');

    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
} 
};

export default connectToDatabase;