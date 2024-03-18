import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/postRoutes.js'
import DalleRoutes from './routes/DalleRoutes.js'
import connectDB from './mongodb/connect.js';

dotenv.config(); //allows to pull env variables from dotenv file

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoutes);         //API endpoint that can hook onto front end 
app.use('/api/v1/Dalle',DalleRoutes);



app.get('/',async(req,res) =>{
    res.send('Hello from AI ImageGeneration tool')
})

const startServer = async () =>{

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);        
    }
}

startServer();