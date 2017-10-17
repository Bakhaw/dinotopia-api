const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const router = express.Router();

const Dino = require('../model/dino');

// where and how the files/images should be saved.
const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, path.resolve('src', 'uploads'));
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });



// afficher tous les dinosaures
router.get('/', (req, res) => {
  Dino.find((err, dinos) => {
    if(err) {res.send(err)}
    res.json(dinos);
  });
});
// afficher un dino par id
router.get('/:id', (req, res) => {
  Dino.findById(req.params.id, (err, dino) => {
    if(err) {res.send(err)}
    res.json(dino);
  });
});
// créer un dino
router.post('/add', upload.single('image'), (req, res) => {
  const newDino = new Dino(req.body);
  newDino.image = "src/uploads/" + req.file;
  newDino.save((err, dino) => {
    if(err) {res.send(err)}
    res.redirect("http://localhost:3000");
    // res.json({"success": `${dino.name} has been added`});
  });
  console.log(newDino.image);

});

// éditer un dino
router.post('/:id/edit', bodyParser.urlencoded({ extended: true }), (req, res) => {
  Dino.findByIdAndUpdate(req.params.id, req.body, (err, updatedDino) => {
    if(err) {res.send(err)}
    res.redirect('http://localhost:3000')
    // res.json({"success": `${updatedDino.name} has been updated`})
  });
});

//supprimer un dino
router.post('/:id/delete', (req, res) => {
  Dino.findByIdAndRemove(req.params.id, (err, deletedDino) => {
    if(err) {res.send(err)}
    res.redirect('http://localhost:3000')
    // res.json({"success": `${deletedDino.name} has been updated`})
  });
});



module.exports = router;
