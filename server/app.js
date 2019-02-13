import express from 'express';
const app = express();
const db = require('./db');

const VolunteerController = require('./volunteer/VolunteerController');
const OrganisationController = require('./organisation/OrganisationController');

const logRequestStart = (req, res, next) => {
    console.info(`${req.method} ${req.originalUrl}`);

    res.on('finish', () => {
        console.info(`    ${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
    });

    next();
};
app.use(logRequestStart);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorisation");
    next();
});

app.use('/volunteers', VolunteerController);
app.use('/organisations', OrganisationController);

module.exports = app;
