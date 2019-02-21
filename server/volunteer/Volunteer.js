const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    hash: String,
    salt: String
});

VolunteerSchema.methods.setPassword = password => {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

VolunteerSchema.methods.validPassword = password => {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

VolunteerSchema.methods.generateJwt = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, "buzzSecret"); // TODO move secret into an environment variable
};


mongoose.model('Volunteer', VolunteerSchema);
module.exports = mongoose.model('Volunteer');
