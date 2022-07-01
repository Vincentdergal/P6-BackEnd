const express = require('express');
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");
const auth = require('../middleware/auth');
// multer sauvegarder l'image
const multer = require('../middleware/multer-config');
//routes CRUD pour les sauces
router.get("/", auth, saucesCtrl.getAllSauces);
router.post("/", auth, multer, saucesCtrl.createSauce);
router.get("/:id", auth, saucesCtrl.getOneSauce);
router.put("/:id", auth, multer, saucesCtrl.modifySauce);
router.delete("/:id", auth, saucesCtrl.deleteSauce);
//route pour aimer les sauces
router.post("/:id/like", auth, saucesCtrl.likeSauce);

module.exports = router;