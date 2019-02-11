import express from 'express';
const app = express();
const db = require('./db');

const VolunteerController = require('./volunteer/VolunteerController');
const OrganisationController = require('./organisation/OrganisationController');

app.use('/volunteers', VolunteerController);
app.use('/organisations', OrganisationController);

module.exports = app;
