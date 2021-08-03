import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import foodRoutes from './routes/foodRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/foodItems', foodRoutes);
app.use('/cartItems', cartRoutes);

const CONNECTION_URL = 'mongodb+srv://user-123:ash25111998@mini-moon-tut.nglsc.mongodb.net/foodorder?retryWrites=true&w=majority';


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);