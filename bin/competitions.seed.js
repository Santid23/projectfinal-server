const Competition = require('../models/competition.model');
const competition = require('./competitions.json');
// const user = require('./users.json');

(async () => {
    const mongoose = require( 'mongoose' );

    const MONGO_URI = 
    // FALTA PONER NOMBRE LOCALHOST
        process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/TryHard_APP";

    mongoose
        .connect(MONGO_URI)
        .then((x) =>{
            const dbName = x.connection[0].name;
            console.log(`Connected to database "${dbName}"`);
        })
        .catch((err)=>console.error("Error connecting to mongo", err));

    try {
        await Competition.deleteMany();
        console.log("DB cleaned");

        const modelAdaptedCompetitions = competition.map(
            ({
                title,
                description,
                status,
                address,
                province,
                city,
                image,
                days,
                createdAt,
                dueDate
            }) => {
                return{
                  title,
                  description,
                  status,
                  address,
                  province,
                  city,
                  image,
                  days,
                  createdAt: new Date(createdAt),
                  dueDate: new Date(dueDate)
                };
            }
        );

        const competitionsDb = await  Competition.insertMany(modelAdaptedCompetitions);
        console.log(`Successful DB Seed with competitions ${competitionsDb}!`);

    } catch (error) {
        console.error('Error', error);
    } finally{
       mongoose.connection.close();
    }    

})();