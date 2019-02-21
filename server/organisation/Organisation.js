const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Listing = new mongoose.Schema({
    name: String,
    location: String,
    datePosted: Date,
});
const OrganisationSchema = new mongoose.Schema({
    orgName: String,
    location: String,
    email: String,
    hash: String,
    salt: String,
    listings: [Listing]
});

OrganisationSchema.methods.setPassword = password => {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

OrganisationSchema.methods.validPassword = password => {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

OrganisationSchema.methods.generateJwt = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.signa({
        _id: this._id,
        email: this.email,
        orgName: this.orgName,
        exp: parseInt(expiry.getTime() / 1000),
    }, "buzzSecret"); // TODO move secret into an environment variable
};

mongoose.model('Organisation', OrganisationSchema);
module.exports = mongoose.model('Organisation');
