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
import worldRoutes from './routes/world.js'

const PORT = process.env.PORT || 4000

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/weapons', weaponsRoutes);
app.use('/api/characters', charactersRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/world', worldRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`)
})






//  import cors from 'cors'
//  import express from 'express'
//  import mongoDbConnection from './db.js'

//  import bodyParser from 'body-parser'
//  import jwt from 'jsonwebtoken'
//  import bcrypt from "bcrypt"
//  import 'dotenv/config'
//  import User from './models/user.js'

// const port = process.env.PORT || 5000
// const host = process.env.HOST || 'http://localhost:5000/'
// const server = express()

// server.use(express.json())
// server.use(cors())
// server.use(bodyParser.json());

// //supporto/assistenza
// server.get('/api/faqs', (req, res) => {
//     const faqs = [
//       { question: 'Cos\'è React?', answer: 'React è una libreria JavaScript.' },
//       { question: 'Cos\'è MongoDB?', answer: 'MongoDB è un database NoSQL.' },
//     ];
//     res.json(faqs);
//   });

// // supporto/requisiti
// server.get('/api/requ', (req, res) => {
//     const requ = [
//       { question: 'Cos\'è React?', answer: 'React è una libreria JavaScript.' },
//       { question: 'Cos\'è MongoDB?', answer: 'MongoDB è un database NoSQL.' },
//     ];
//     res.json(requ);
//   });


//     // Login
//     server.post('/api/login', async (req, res) => {
//         const { username, password } = req.body;

//         try {
//             // Verifica se l'utente esiste
//             const user = await User.findOne({ username });
//             if (!user) {
//                 return res.status(400).json({ success: false, message: 'Credenziali non valide' });
//             }

//             // Confronta la password inserita con quella hashata
//             const isMatch = await bcrypt.compare(password, user.password);
//             if (!isMatch) {
//                 return res.status(400).json({ success: false, message: 'Credenziali non valide' });
//             }

//             // Genera un token JWT
//             const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//             res.json({ success: true, token });
//         } catch (error) {
//             res.status(500).json({ success: false, message: 'Errore durante il login' });
//         }
//     });
  
//     // Registrazione
//     server.post('/api/register', async (req, res) => {
//         const { username, email, password } = req.body;

//         try {
//             // Hash della password
//             const hashedPassword = await bcrypt.hash(password, 10);

//             // Creazione del nuovo utente
//             const newUser = new User({
//                 username,
//                 email,
//                 password: hashedPassword,
//             });

//             await newUser.save();
//             res.status(201).json({ success: true, message: 'Registrazione avvenuta con successo!' });
//         } catch (error) {
//             res.status(500).json({ success: false, message: 'Errore durante la registrazione' });
//         }
//     });


// //   server.get('/api/personaggi', (req, res) => {

// //   });

// //   server.get('/api/armi', (req, res) => {

// //   });

//  mongoDbConnection()


// server.listen(port, () => {
//     console.log(`Server is listening at port ${port} at ${host}`)
// })