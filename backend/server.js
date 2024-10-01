//import supporto from './Api/Supporto.js'
import cors from 'cors'
import express from 'express'
import mongoDbConnection from './db.js'
// import Personaggi from '../frontend/src/components/Personaggi/Personaggi.jsx'

const port = process.env.PORT || 5000
const host = process.env.HOST || 'http://localhost:5000/'
const server = express()

server.use(express.json())
server.use(cors())

server.get('/api/faqs', (req, res) => {
    const faqs = [
      { question: 'Cos\'è React?', answer: 'React è una libreria JavaScript.' },
      { question: 'Cos\'è MongoDB?', answer: 'MongoDB è un database NoSQL.' },
    ];
    res.json(faqs);
  });

//   server.get('/api/personaggi', (req, res) => {
//     console.log("Personaggi");
//   });

//   server.get('/api/armi', (req, res) => {
//     console.log("armi");
//   });

mongoDbConnection()


server.listen(port, () => {
    console.log(`Server is listening at port ${port} at ${host}`)
})