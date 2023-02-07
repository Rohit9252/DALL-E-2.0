import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));


app.get('/', (req, res) => {
    res.send('Hello World!');
});
const startServer = async () => {

    try{
        connectDB(process.env.MONGODB_URL)
        app.listen(8888, () => {
            console.log(`server has started on port 8888`);
        });
    }
    catch(err){
        console.log(err);
    }
}

startServer();
