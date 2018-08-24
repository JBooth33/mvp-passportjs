const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  companyName: { type: String, required: true},
  companyAddress1: { type: String, required: true},
  CompanyAddress2: { type: String, required: false},
  companyCity: { type: String, required: true},
  companyState: { type: String, required: true},
  companyZip: { type: String, required: true},
  companyURL: { type: String, required: true},
  companyContact: {type: String, required: true},
  companyContactPhone: {type: String, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true},
  title: { type: String},
  role: { type: Number, required: true},
  email: {
    type: String,
    index: { unique: true }
  },
  phoneNumber: { type: Number, required: true},
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true},
  status: { type: String, default: "Pending", required: true},
  dateCreated: { type: Date, default: Date.now}
});
 
/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
userSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

/**
 * The pre-save hook method.
 */
userSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
