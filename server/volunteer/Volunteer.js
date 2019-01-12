const mongoose = require('mongoose');
const VolunteerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});
mongoose.model('Volunteer', VolunteerSchema);
module.exports = mongoose.model('Volunteer');