import express from 'express';

const characters = [
    {
        id: 1,
        name: 'Orin Drax',
        description: "è un veterano cacciatore di taglie, era un robot impiegato nel settore edile. Dopo un incidente in cantiere, è stato abbandonato in una discarica dove un alieno misterioso lo ha ricostruito creando un cyborg di carne e metallo. Le sue parti meccaniche lo rendono un guerriero formidabile, ma allo stesso tempo lo isolano emotivamente dagli altri. Ha una personalità dura, ma dietro la sua armatura cibernetica si nasconde un’anima segnata dalle perdite e dal senso di colpa. Ha un occhio robotico che gli permette di analizzare l'ambiente circostante e un braccio meccanico con varie funzioni da combattimento.",
        // img: 
    },
    {
        id: 2,
        name: 'Zara Valen',
        description: "Zara è una giovane donna piena di determinazione e talento. Cresciuta da Orin, ha imparato tutto ciò che sa sul combattimento e la caccia alle taglie da lui. È agile, con una precisione letale nelle battaglie. Nonostante la sua forza, è ancora alla ricerca di sé stessa, divisa tra il desiderio di giustizia e la sua curiosità riguardo al suo passato. Ha una personalità ribelle e non sempre segue le regole di Orin, soprattutto quando si tratta di affrontare le sue radici.",
        // img:
    },
    {
        id: 3,
        name: 'Tyran Velkor',
        description: "il criminale più pericoloso e ricercato della galassia: la sua fama è data dal suo essere spietato ed un vero e proprio divoratore di mondi. Dopo anni di studi su antiche forze cosmiche, Tyran si avventurò nel cuore di una stella morente e ne assorbì l'energia primordiale distruggendola nel processo. Questo potere gli ha dato abilità incredibili come il controllo dell'energia stellare ma ha anche consumato il suo corpo, obbligandolo ad indossare una maschera per poter respirare.",
        img: '../public/VossValen.jpg'
    }
];

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(characters);
});


export default router;