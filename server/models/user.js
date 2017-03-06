var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var passportLocalMongoose = require('passport-local-mongoose');
var offerSchema = require('./offer').offerSchema;
var Schema = mongoose.Schema;



userSchema = new Schema({   //TODO extend(check) userSchema
    username: {
        type: String,
        index: true,
        unique: true,
        lowercase: true,
        required: [true, 'required']
    },
    email: {
        type: String,
        index: true,
        unique: true,
        lowercase: true,
        required: [true, 'required']
    },
    password: {
        type: String
    },
    offer: [offerSchema]
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
