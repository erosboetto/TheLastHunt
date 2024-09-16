import GoogleStrategy from 'passport-google-oauth20'
import jwt from 'jsonwebtoken'
import Profiles from '../models/profileSchema.js'

// creo la strategia per passport
const googleStrategy = new GoogleStrategy({
    // dati recuperati da cloud.google
    clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //google callback è la rotta che verrà richiamata post ricezione token
	callbackURL: `${process.env.HOST}${process.env.GOOGLE_CALLBACK}`
},
async function (accessToken, refreshToken, profile, callback) {
        console.log(`${process.env.HOST}${process.env.GOOGLE_CALLBACK}`)
        /**
         * Riceverò un oggetto così:
         * profile: {
            _json: {
                given_name: "Pinco",
                family_name: "Pallino",
                email: "pinco@pallin.it",
                sub: "1231efd09iaf" // id di google
            }
        } */ 
        // estraggo dall'oggetto e rinomino i valori che mi servono per l'inserimento\ricerca sul db
        
        const {given_name: name, family_name: surname, email, sub: googleId} = profile._json
        
        // ricerco l'utente sul db
        let userProfile = await Profiles.findOne({googleId: googleId})
        // se non c'è lo creo
        if (!userProfile) {
            console.log('creo nuovo profilo')
            const newProfile = Profiles({
                name, surname, email, googleId
            })
            userProfile = await newProfile.save()
        }

        // a prescindere, genero il jwt per l'utente
        
        jwt.sign({
            // occhio! l'userId nel token NON deve essere il googleId
            userId: userProfile._id
            },
            process.env.JWT_SECRET, {
                expiresIn: '1h'
            },
            // funzione di callback
            (error, jwtToken) => {
                if(error) return res.status(500).send('Errore durante il login con google')
                
                return callback(null, jwtToken)
            }
        )
    }   
)

export default googleStrategy