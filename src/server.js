import dotenv from 'dotenv';
dotenv.config();

import app from '../src/web/app.js'
import {connectPostgres } from './store/postgres.js'

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'



const boot = async () => {
    try {
        await connectPostgres();
        app.listen(PORT, HOST, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

boot().then(r => console.log(r) );