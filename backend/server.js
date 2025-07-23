import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import userRouter from './routes/userRoute.js';
import taskRouter from './routes/taskRoute.js';

import { connectDB } from './config/db.js';

connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRouter);
app.use("/api/tasks", taskRouter);

app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});