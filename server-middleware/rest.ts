import peopleRoutes from "./routes/peopleRoutes";
import planetsRoutes from "./routes/planetsRoutes";
import starshipsRoutes from "./routes/starshipsRoutes";

const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

app.use('/people', peopleRoutes);
app.use('/planets', planetsRoutes);
app.use('/starships', starshipsRoutes);


module.exports = app