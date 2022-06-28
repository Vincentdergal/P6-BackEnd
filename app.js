const express = require("express");
const sauce = require('./models/sauce');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require("body-parser");
const saucesRoutes = require('./routes/sauces')
const userRoutes = require("./routes/user");


mongoose.connect('mongodb+srv://Vincentdergal:Vincentdergal60600@openclassroomsp6.rdaf2uh.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
  


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

module.exports =  app;

