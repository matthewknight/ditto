const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Organisation = require('./Organisation');

router.post('/', (req, res) => {
    Organisation.create({
            orgName : req.body.orgName,
            location : req.body.location,
            email : req.body.email,
            password : req.body.password
        },
        (err, organisation) => {
            if (err) {
                res.status(500).send("Error Organisation.create on DB");
            } else {
                res.status(200).send(organisation);
            }
        });
});

router.get('/', (req, res) => {
    Organisation.find({}, (err, organisations) => {
        if (err) {
            res.status(500).send("Error Organisation.find on DB");
        } else {
            res.status(200).send(organisations);
        }
    });
});

router.get('/:id', (req, res) => {
    Organisation.findById(req.params.id, (err, organisation) => {
        if (err) {
            res.status(500).send("Error Organisation.findById on DB");
        } else {
            res.status(200).send(organisation);
        }
    })
});

router.delete('/:id', (req, res) => {
    Organisation.findByIdAndRemove(req.params.id, (err, organisation) => {
        if (err) {
            res.status(500).send("Error Organisation.findByIdAndRemove on DB");
        } else {
            res.status(200).send(`Organisation ${organisation.lastName}, ${organisation.firstName} was deleted`);
        }
    })
});

router.put('/:id', (req, res) => {
    Organisation.findByIdAndUpdate(req.params.id, req.body, (err, organisation) => {
        if (err) {
            res.status(500).send("Error Organisation.findByIdAndUpdate on DB");
        } else {
            res.status(200).send(organisation);
        }
    })
});

module.exports = router;
