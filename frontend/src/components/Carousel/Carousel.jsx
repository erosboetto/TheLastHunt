import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Carousel.css';

// Array di immagini importate localmente
const images = [
  { src: require('../img/pianeti/astra-prime.jpg'), alt: 'Immagine 1', descrizione: "Astra Prime è il cuore pulsante del sistema solare, un mondo interamente trasformato in un monumento alla tecnologia e al progresso. Dal vuoto dello spazio, la sua superficie è illuminata da città futuristiche che si estendono all'infinito, con grattacieli di metallo che sfidano la gravità e si innalzano verso le stelle. I riflessi di neon multicolori creano un mosaico di luci viventi, visibile anche da lontano. Navi spaziali attraversano l'atmosfera come sciami di insetti metallici, mentre i quartieri residenziali e industriali competono per lo spazio prezioso. È un pianeta dove il potere e la ricchezza si concentrano, ma dove l'oscurità delle periferie nasconde segreti e pericoli."},
  { src: require('../img/pianeti/eldora.jpg'), alt: 'Immagine 2', descrizione: "Eldora è un paradiso verde che sembra esistere fuori dal tempo. Le sue giungle sono lussureggianti, con piante aliene giganti che si estendono per chilometri, e antiche rovine che si perdono tra la vegetazione. Dallo spazio, il pianeta appare come una gemma verde, con foreste tropicali che coprono gran parte della sua superficie e fiumi scintillanti che tagliano attraverso il fogliame. Eldora non è solo un luogo di bellezza naturale, ma anche un tesoro di misteri perduti: sotto le sue foglie giganti e dietro le sue cascate cristalline, civiltà dimenticate nascondono segreti che attendono di essere scoperti."},
  { src: require('../img/pianeti/zyron.jpg'), alt: 'Immagine 3', descrizione: "Zyron è un pianeta antico e morente, dove la polvere rossa dei deserti avvolge tutto ciò che rimane della sua gloria passata. Le sue miniere, un tempo fiorenti, sono ora cimiteri di metallo arrugginito e macchinari abbandonati, visibili perfino dall'orbita. Crateri profondi e canyon tagliano la superficie, mentre i deboli bagliori di lava sotto la crosta si insinuano attraverso le crepe del suolo, dando a Zyron un aspetto infernale. È un mondo di sopravvivenza e lotta, dove chiunque vi metta piede deve affrontare non solo il terreno ostile, ma anche le ambizioni di coloro che vi cercano fortuna."},
  { src: require('../img/pianeti/glaciera.jpg'), alt: 'Immagine 4', descrizione: "Glaciera è un mondo di silenzio e gelo eterno. Dallo spazio, la sua superficie appare come un candido deserto di ghiaccio senza fine, interrotto solo da colossali crepacci e brillanti formazioni di cristalli di neve. Sotto la sua spessa coltre di ghiaccio, antiche città riscaldate dall'energia geotermica pulsano lentamente come cuori gelidi. Le luci sotterranee si riflettono debolmente attraverso le lastre trasparenti, creando un paesaggio etereo. Qui, il clima inospitale nasconde segreti dimenticati e creature che cacciano nell'oscurità."},
  { src: require('../img/pianeti/obsidia.jpg'), alt: 'Immagine 5', descrizione: "Obsidia è un pianeta vivo, ma nel modo più distruttivo possibile. I suoi vulcani eruttano costantemente, scaricando fiumi di lava rossa e bollente che illuminano l'atmosfera con un bagliore sinistro. La roccia vulcanica nera copre ogni superficie, rendendo il paesaggio tetro e desolato. Le eruzioni gettano nubi di cenere e polvere nell'aria, creando una cortina di fumo perenne. Obsidia è il pianeta dove la vita si aggrappa ai margini, in città sospese su piattaforme magnetiche che sfidano il pericolo costante. Da lontano, il pianeta sembra un inferno inarrestabile, un luogo di pericolo ma anche di straordinaria bellezza selvaggia."},
  { src: require('../img/pianeti/zyx.jpg'), alt: 'Immagine 6', descrizione: "Nyx è un mondo immerso nell'oscurità perpetua. Dallo spazio, il pianeta sembra un'ombra silenziosa, con solo poche luci bioluminescenti che emergono dalle città sotterranee, sparse come stelle sulla superficie tenebrosa. La sua atmosfera è fredda e densa, impregnata di mistero e segreti nascosti. Nyx è un pianeta di ombre e segreti, dove il pericolo si nasconde dietro ogni angolo buio. Le profondità sotterranee rivelano una rete di antiche strutture aliene e grotte dimenticate, un luogo dove la luce è un lusso e la sopravvivenza è un'arte."},
  { src: require('../img/pianeti/crystalia.jpg'), alt: 'Immagine 7', descrizione: "Crystalia è un pianeta che brilla come un gioiello cosmico. La sua superficie è coperta da gigantesche formazioni cristalline che riflettono e amplificano la luce delle stelle circostanti, creando uno spettacolo luminoso visibile dallo spazio. I cristalli, di varie tonalità di blu, viola e verde, emettono una propria energia che pulsa ritmicamente, dando al pianeta un aspetto vivo e misterioso. L'energia emanata dalle rocce è tanto potente quanto pericolosa, trasformando Crystalia in un mondo di grande bellezza e pericolo nascosto. Le sue caverne e montagne di cristalli contengono segreti che attirano esploratori e cacciatori di tesori da ogni angolo della galassia."},
  { src: require('../img/pianeti/vortex.jpg'), alt: 'Immagine 8', descrizione: "Vortex è un pianeta di pura furia atmosferica. La sua superficie è completamente avvolta da tempeste di fulmini e uragani eterni, visibili dallo spazio come vortici di nuvole scure interrotte da lampi di luce accecante. La potenza delle tempeste plasma l'intero pianeta, rendendolo un ambiente ostile a qualsiasi forma di vita superficiale. Tuttavia, tra i venti impetuosi e le piogge acide, alcune città futuristiche si sono rifugiate sotto cupole di energia, creando oasi di tranquillità nel caos. Vortex è un mondo di pericolo costante, dove ogni viaggio può trasformarsi in una lotta contro la furia della natura stessa."}
];

const CarouselComponent = () => {
  return (
  <Container className='posizione'>
    <Carousel className='d_carousel' indicators={false} interval={null}>
      {images.map((images, index) => (
        <Carousel.Item key={index} className='b_carousel'>
          <Container style={{width: '80%'}}>      
              <img
                className="w-100"
                src={images.src}
                alt={images.alt}
              />
          </Container>
          <Container className='desc'> 
            <p>{images.descrizione}</p>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  </Container>
  );
};

export default CarouselComponent;