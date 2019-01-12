const mongoose = require('mongoose');

const Listing = new mongoose.Schema({
    name: String,
    location: String,
    datePosted: Date,
});
const OrganisationSchema = new mongoose.Schema({
    orgName: String,
    location: String,
    email: String,
    password: String,
    token: String,
    listings: [Listing]
});

mongoose.model('Organisation', OrganisationSchema);
module.exports = mongoose.model('Organisation');