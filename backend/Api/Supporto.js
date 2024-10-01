import cors from 'cors'
import express from 'express'

server.get('/api/faqs', (req, res) => {
  const faqs = [
    { question: 'Cos\'è React?', answer: 'React è una libreria JavaScript.' },
    { question: 'Cos\'è MongoDB?', answer: 'MongoDB è un database NoSQL.' },
  ];
  res.json(faqs);
});

export default supporto