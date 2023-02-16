import mongoose from "mongoose";
import validator from "validator";
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";


const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"]
  },
  email: {
    type: String,
    required: [true, "please enter your name"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    minLength: [8, "pass must be atlesat 8 charactor"],
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  subscription: {
    id: String,
    status: String,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  playList: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      Poster: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },

  ResetPasswordToken: String,
  ResetPasswordExpire: String,


});

  schema.pre("save", async function(next){
       if(!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password,10)
        next();
  })

   schema.methods.getJWTToken = function(){
    return Jwt.sign({_id: this._id},process.env.JWT_SECRET,{
      expiresIn:"15d",
    });
   }


   schema.methods.comparePassword = async function(password){

    console.log(this.password);
    return await bcrypt.compare(password, this.password);
   
   };

export const User = mongoose.model("User", schema);