const mongoose = require("require")
const userSchema = mongoose.userSchema({
    username:{
        type :String,
        required : true,
    },
    email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: 'Please provide a valid email address',
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    validate: {
      validator: function (value) {
        // At least one uppercase, one lowercase, one number, one special character
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);
      },
      message:
        'Password must have at least 8 characters, including uppercase, lowercase, number, and special character',
    },
  },
  role:{
    type : String,
    enum: ["Coustomer","Vendor","Admin"],
    default : "Coustomer"
  }
})
module.exports = mongoose.model("User",userSchema)