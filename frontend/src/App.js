import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/Navbar/MyNav'
import MyFooter from './components/Footer/MyFooter'
import Carousel from './components/Carousel/Carousel'
import Play from './components/Play/Play'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
  <main>
    <BrowserRouter>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Container className='app-bg'> {/* da modificare in file apposito container */}
          <Play />
          <Carousel />
        </Container>
      <MyFooter />
    </BrowserRouter>
  </main>
  )
}

export default App