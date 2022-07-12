const express = require("express");
const sauce = require('./models/sauce');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require("body-parser");
const saucesRoutes = require('./routes/sauces')
const userRoutes = require("./routes/user");
const helmet = require('helmet');
const morgan = require('morgan')
const logger = require('./controllers/logger');
const dotenv = require("dotenv");
const rateLimiter = require("./middleware/rateLimiter")


dotenv.config();

logger.info("Un Message");
logger.error("Une Erreur");
app.use(rateLimiter)

const urlMongo = process.env.MONGO_DB_CONNECTION_STRING
mongoose.connect(urlMongo,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => logger.info('Connexion à MongoDB réussie !'))
.catch(() => logger.info('Connexion à MongoDB échouée !'));

app.use(morgan("short", { stream: logger.stream }));
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(express.json());
app.use('/images',express.static(path.join(__dirname,'images')))
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);
app.use(helmet());


module.exports =  app;

