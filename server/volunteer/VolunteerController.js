const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Volunteer = require('./Volunteer');

router.post('/', (req, res) => {
   Volunteer.create({
       firstName : req.body.firstName,
       lastName : req.body.lastName,
       email : req.body.email,
       password : req.body.password
   },
       (err, volunteer) => {
            if (err) {
                res.status(500).send("Error Volunteer.create on DB");
            } else {
                res.status(200).send(volunteer);
            }
       });
});

router.get('/', (req, res) => {
    Volunteer.find({}, (err, volunteers) => {
        if (err) {
            res.status(500).send("Error Volunteer.find on DB");
        } else {
            res.status(200).send(volunteers);
        }
    });
});

router.get('/:id', (req, res) => {
    Volunteer.findById(req.params.id, (err, volunteer) => {
        if (err) {
            res.status(500).send("Error Volunteer.findById on DB");
        } else {
            res.status(200).send(volunteer);
        }
    })
});

router.delete('/:id', (req, res) => {
    Volunteer.findByIdAndRemove(req.params.id, (err, volunteer) => {
        if (err) {
            res.status(500).send("Error Volunteer.findByIdAndRemove on DB");
        } else {
            res.status(200).send(`Volunteer ${volunteer.lastName}, ${volunteer.firstName} was deleted`);
        }
    })
});

router.put('/:id', (req, res) => {
    Volunteer.findByIdAndUpdate(req.params.id, req.body, (err, volunteer) => {
        if (err) {
            res.status(500).send("Error Volunteer.findByIdAndUpdate on DB");
        } else {
            res.status(200).send(volunteer);
        }
    })
});
module.exports = router;
