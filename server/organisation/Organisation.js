const mongoose = require('mongoose');
const OrganisationSchema = new mongoose.Schema({
    orgName: String,
    location: String,
    email: String,
    password: String
});
mongoose.model('Organisation', OrganisationSchema);
module.exports = mongoose.model('Organisation');