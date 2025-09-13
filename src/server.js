import dotenv from 'dotenv';
dotenv.config();

import app from '../src/web/app'
import {connectPostgres } from './store/postgres'

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectPostgres();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}