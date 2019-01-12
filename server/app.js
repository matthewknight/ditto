import express from 'express';
const app = express();
const db = require('./db');

const VolunteerController = require('./volunteer/VolunteerController');
app.use('/volunteers', VolunteerController);

module.exports = app;