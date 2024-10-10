import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.js';
import weaponsRoutes from './routes/weapons.js';
import charactersRoutes from './routes/characters.js';
import supportRoutes from './routes/support.js'
import planetsRoutes from './routes/planets.js'

const PORT = process.env.PORT || 4000

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/auth', authRoutes);
app.use('/weapons', weaponsRoutes);
app.use('/characters', charactersRoutes);
app.use('/support', supportRoutes);
app.use('/planets', planetsRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`)
})

export default app;