import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please fill a valid email address"
    ],  
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
    }
  }, {
    timestamps: true,
  });

  const User = mongoose.model("User", userSchema);

  export default User;