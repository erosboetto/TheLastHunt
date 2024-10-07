import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/Navbar/MyNav'
import MyFooter from './components/Footer/MyFooter'
import Home from './components/Home/Home'
import Personaggi from './components/Personaggi/Personaggi'
import Armi from './components/Armi/Armi'
import FaqPage from './components/Supporto/Supporto'
import Requisiti from './components/Supporto/Req'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
  <main>
    <BrowserRouter>
      <MyNav />
        <div className='app-bg'> {/* da modificare in file apposito container */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Personaggi" element={<Personaggi />} />
            <Route path="/Armi" element={<Armi />} />
            <Route path="/Supporto/Faq" element={<FaqPage />} />
            <Route path="/Supporto/Req" element={<Requisiti />} />
          </Routes>
        </div>
      <MyFooter />
    </BrowserRouter>
  </main>
  )
}

export default App