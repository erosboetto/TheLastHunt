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
  <main className=''>

    <BrowserRouter>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Container className='app-bg'> {/* da modificare in file apposito container */}
            <Play />
          <Carousel />
          {/* <div className='border'>
            <p>
              Il mondo è cambiato, ma la caccia è eterna. In un’era lontana, dove la galassia è frammentata tra imperi corporativi e zone di confine senza legge, due spietati cacciatori di taglie vagano tra le stelle alla ricerca di un ultimo grande colpo.
              Cobalt Graves, un veterano con un braccio cibernetico e un passato oscuro, è il pilota e leader della squadra. Nara Voss, una letale sniper mascherata con una visiera futuristica, è la sua silenziosa e precisa compagna. Dopo anni di missioni pericolose, i due si trovano coinvolti in una missione che va oltre la solita caccia: devono rintracciare un misterioso criminale ricercato che si nasconde su un remoto pianeta futuristico, conosciuto come Dystra.
              Atterrati su Dystra, una terra dove le città cyberpunk convivono con deserti alieni, scoprono che la posta in gioco è molto più alta. Corporazioni spietate, bande criminali e antiche tecnologie aliene minacciano non solo la loro vita, ma l’intero equilibrio della galassia. I due cacciatori dovranno navigare tra le fazioni in lotta, affrontare duelli epici e svelare una cospirazione che potrebbe cambiare il destino dell’universo.
            </p>
          </div> */}
        </Container>
      <MyFooter />
    </BrowserRouter>
  </main>
  )
}

export default App