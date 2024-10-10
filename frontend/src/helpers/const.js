import { FaSteam, FaPlaystation, FaXbox } from 'react-icons/fa';

export const downloadLinks = [
    { name: 'Steam', url: 'https://store.steampowered.com/', icon: FaSteam },
    { name: 'PS5', url: 'https://www.playstation.com/', icon: FaPlaystation },
    { name: 'PS4', url: 'https://www.playstation.com/', icon: FaPlaystation },
    { name: 'Xbox Series X|S', url: 'https://www.xbox.com/', icon: FaXbox },
    { name: 'Xbox One', url: 'https://www.xbox.com/', icon: FaXbox },
];

export const systemRequirements = [
    { component: 'OS', minimum: 'Windows 10 x64 20H2', recommended: 'Windows 10 x64 20H2' },
    { component: 'CPU', minimum: 'Intel i5-3570 / AMD FX-8350', recommended: 'Intel i7-7700K / AMD Ryzen 5 2600X' },
    { component: 'System Memory', minimum: '8 GB RAM', recommended: '16 GB RAM' },
    { component: 'GPU', minimum: 'GeForce GTX 1050Ti / AMD Radeon RX 570 / Intel Arc A380 (4GB VRAM or higher)', recommended: 'GeForce RTX 2060 / AMD Radeon RX 5600XT / Intel Arc A750' },
    { component: 'DirectX', minimum: 'Version 12', recommended: 'Version 12' },
    { component: 'Storage', minimum: '50 GB or more free space (SSD recommended)', recommended: '50 GB or more free space (SSD recommended)' },
];

export const additionalInfo = [
    "On first launch, the Graphics Quality option is automatically set based on your PC specifications. Graphics can be increased or changed manually.",
    "To improve game performance, the Graphics Quality option for PCs with minimum requirements below 8GB system memory and 6GB video memory will be set to 'Low'.",
    "Integrated graphics cards are not suitable for running the game. Note that using a mobile GPU may also lead to performance issues.",
];

export const homeContent = {
    title: "ESPLORA LA GALASSIA",
    description: "The Last Hunt è il gioco single player open world ambientato nella galassia di Arcturus. Avrai la possibilità di esplorare pianeti, far parte di corporazioni corrotte, viaggiare da mondi a mondi e prendere decisioni che varieranno il proseguimento della tua storia. Rischia tutto nei panni di Zara Valen, un intrepida cacciatrice di taglie in cerca di verità e giustizia, combatti, ruba e uccidi per riportare ordine nella galassia e diventare la più rinomata tra i cacciatori di taglie.",
    downloadButtonText: "SCARICA ORA"
};

export const planetImages = [
    { src: require('../assets/img/planets/astra-prime.jpg'), alt: 'Astra Prime', descrizione: "Astra Prime è il cuore pulsante del sistema solare, un mondo interamente trasformato in un monumento alla tecnologia e al progresso. Dal vuoto dello spazio, la sua superficie è illuminata da città futuristiche che si estendono all'infinito, con grattacieli di metallo che sfidano la gravità e si innalzano verso le stelle. I riflessi di neon multicolori creano un mosaico di luci viventi, visibile anche da lontano. Navi spaziali attraversano l'atmosfera come sciami di insetti metallici, mentre i quartieri residenziali e industriali competono per lo spazio prezioso. È un pianeta dove il potere e la ricchezza si concentrano, ma dove l'oscurità delle periferie nasconde segreti e pericoli." },
    { src: require('../assets/img/planets/eldora.jpg'), alt: 'Eldora', descrizione: "Eldora è un paradiso verde che sembra esistere fuori dal tempo. Le sue giungle sono lussureggianti, con piante aliene giganti che si estendono per chilometri, e antiche rovine che si perdono tra la vegetazione. Dallo spazio, il pianeta appare come una gemma verde, con foreste tropicali che coprono gran parte della sua superficie e fiumi scintillanti che tagliano attraverso il fogliame. Eldora non è solo un luogo di bellezza naturale, ma anche un tesoro di misteri perduti: sotto le sue foglie giganti e dietro le sue cascate cristalline, civiltà dimenticate nascondono segreti che attendono di essere scoperti." },
    { src: require('../assets/img/planets/zyron.jpg'), alt: 'Zyron', descrizione: "Zyron è un pianeta antico e morente, dove la polvere rossa dei deserti avvolge tutto ciò che rimane della sua gloria passata. Le sue miniere, un tempo fiorenti, sono ora cimiteri di metallo arrugginito e macchinari abbandonati, visibili perfino dall'orbita. Crateri profondi e canyon tagliano la superficie, mentre i deboli bagliori di lava sotto la crosta si insinuano attraverso le crepe del suolo, dando a Zyron un aspetto infernale. È un mondo di sopravvivenza e lotta, dove chiunque vi metta piede deve affrontare non solo il terreno ostile, ma anche le ambizioni di coloro che vi cercano fortuna." },
    { src: require('../assets/img/planets/glaciera.jpg'), alt: 'Glaciera', descrizione: "Glaciera è un mondo di silenzio e gelo eterno. Dallo spazio, la sua superficie appare come un candido deserto di ghiaccio senza fine, interrotto solo da colossali crepacci e brillanti formazioni di cristalli di neve. Sotto la sua spessa coltre di ghiaccio, antiche città riscaldate dall'energia geotermica pulsano lentamente come cuori gelidi. Le luci sotterranee si riflettono debolmente attraverso le lastre trasparenti, creando un paesaggio etereo. Qui, il clima inospitale nasconde segreti dimenticati e creature che cacciano nell'oscurità." },
    { src: require('../assets/img/planets/obsidia.jpg'), alt: 'Obsidia', descrizione: "Obsidia è un pianeta vivo, ma nel modo più distruttivo possibile. I suoi vulcani eruttano costantemente, scaricando fiumi di lava rossa e bollente che illuminano l'atmosfera con un bagliore sinistro. La roccia vulcanica nera copre ogni superficie, rendendo il paesaggio tetro e desolato. Le eruzioni gettano nubi di cenere e polvere nell'aria, creando una cortina di fumo perenne. Obsidia è il pianeta dove la vita si aggrappa ai margini, in città sospese su piattaforme magnetiche che sfidano il pericolo costante. Da lontano, il pianeta sembra un inferno inarrestabile, un luogo di pericolo ma anche di straordinaria bellezza selvaggia." },
    { src: require('../assets/img/planets/zyx.jpg'), alt: 'Zyx', descrizione: "Nyx è un mondo immerso nell'oscurità perpetua. Dallo spazio, il pianeta sembra un'ombra silenziosa, con solo poche luci bioluminescenti che emergono dalle città sotterranee, sparse come stelle sulla superficie tenebrosa. La sua atmosfera è fredda e densa, impregnata di mistero e segreti nascosti. Nyx è un pianeta di ombre e segreti, dove il pericolo si nasconde dietro ogni angolo buio. Le profondità sotterranee rivelano una rete di antiche strutture aliene e grotte dimenticate, un luogo dove la luce è un lusso e la sopravvivenza è un'arte." },
    { src: require('../assets/img/planets/crystalia.jpg'), alt: 'Crystalia', descrizione: "Crystalia è un pianeta che brilla come un gioiello cosmico. La sua superficie è coperta da gigantesche formazioni cristalline che riflettono e amplificano la luce delle stelle circostanti, creando uno spettacolo luminoso visibile dallo spazio. I cristalli, di varie tonalità di blu, viola e verde, emettono una propria energia che pulsa ritmicamente, dando al pianeta un aspetto vivo e misterioso. L'energia emanata dalle rocce è tanto potente quanto pericolosa, trasformando Crystalia in un mondo di grande bellezza e pericolo nascosto. Le sue caverne e montagne di cristalli contengono segreti che attirano esploratori e cacciatori di tesori da ogni angolo della galassia." },
    { src: require('../assets/img/planets/vortex.jpg'), alt: 'Vortex', descrizione: "Vortex è un pianeta di pura furia atmosferica. La sua superficie è completamente avvolta da tempeste di fulmini e uragani eterni, visibili dallo spazio come vortici di nuvole scure interrotte da lampi di luce accecante. La potenza delle tempeste plasma l'intero pianeta, rendendolo un ambiente ostile a qualsiasi forma di vita superficiale. Tuttavia, tra i venti impetuosi e le piogge acide, alcune città futuristiche si sono rifugiate sotto cupole di energia, creando oasi di tranquillità nel caos. Vortex è un mondo di pericolo costante, dove ogni viaggio può trasformarsi in una lotta contro la furia della natura stessa." }
];

export const weapons = [
    {
        id: 1,
        name: 'H2LW',
        description: "Pistola leggera e versatile",
        munitions: 14
    },
    {
        id: 2,
        name: 'H8SC',
        description: "Fucile d'assalto",
        munitions: 30
    },
    {
        id: 3,
        name: 'H12LR',
        description: "Fucile di precisione",
        munitions: 8
    },
    {
        id: 4,
        name: 'H9HW',
        description: "Mitragliatrice pesante",
        munitions: 400
    },
    {
        id: 5,
        name: 'GMI',
        description: "Coppia di Blaster automatici",
        munitions: 500
    },
    {
        id: 6,
        name: 'GRI',
        description: "Fucile d'assalto al plasma",
        munitions: 50
    },
    {
        id: 7,
        name: 'GHRI',
        description: "Mitragliatrice pesante al plasma",
        munitions: 500
    },
    {
        id: 8,
        name: 'Spada di Tyran',
        description: 'Ottenibile al completamento di: La Famiglia e il Tradimento',
    }
];

export const characters = [
    {
        id: 1,
        name: 'Zara Valen',
        description: "Intrepida cacciatrice di taglie in cerca di verità e giustizia",
        role: "Protagonista",
        img: '',
    },
    {
        id: 2,
        name: 'Capitano Lex Thorn',
        description: "Ex-militare, ora mercenario e alleato di Zara",
        role: "Alleato",
        img: '',
    },
    {
        id: 3,
        name: 'Dr. Aria Nova',
        description: "Brillante scienziata con un passato misterioso",
        role: "Supporto",
        img: '',
    },
    {
        id: 4,
        name: 'Kael Shadowblade',
        description: "Assassino d'elite e rivale di Zara",
        role: "Antagonista",
        img: '',
    },
    {
        id: 5,
        name: 'Synth-0',
        description: "Androide con coscienza propria e abilità uniche",
        role: "Alleato",
        img: '',
    }
];

export const baseUrl = process.env.NODE_ENV === 'production'
? 'https://the-last-hunt-backend.vercel.app'
: 'http://localhost:4000';