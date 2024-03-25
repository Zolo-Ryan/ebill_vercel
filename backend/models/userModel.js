const mongoose = require('mongoose');
const bscrypt = require("bscriptjs");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add a email"],
        unique: true,
        trim : true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: [6, "Password must be up to 6 characters"],
        //maxLength: [23, "Password must not be more than 23 characters"]
    },
    photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://i.ibb.co/4pDNDk1/avatar.png"
    },
    phone: {
        type: String,
        default: +"91"
    },
    bio: {
        type: String,
        default: "bio",
        maxLength : [250, "Bio must not be greater than 250 characters"]
    }
}, {
    timestamps: true,
});
// Encrypt password before ssaving to db
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();

    }

    //Hash password
    const salt = await bscript.gensalt(10);
  const hashedpassword = await bscrypt.hash(thispassword, salt);
  this.password = hashedpassword ;
  next();

})

const User = mongoose.model('User', userSchema)

module.exports = User