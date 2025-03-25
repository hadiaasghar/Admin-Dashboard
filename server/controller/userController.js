const User = require("../models/userModel");
const Asynchandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const registeruser = Asynchandler(async (req, res) => {
  const { f_name, l_name, email, password, dob, phone, image, about } =
    req.body;
  const isuserpresent = await User.findOne({ email });
  if (!f_name || !l_name || !email || !password || !dob || !phone) {
    res.status(400);
    throw new Error("please enter all the fields");
  } else {
    if (isuserpresent) {
      res.status(400);
      throw new Error("email alerday exist");
    } else {
      const hashedpassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        f_name,
        l_name,
        email,
        password: hashedpassword,
        dob,
        phone,
        image,
        about,
      });
      res.send(newUser);
    }
  }
});

//Login

const loginuser = Asynchandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("please enter all the fields");
  };
  const finduser = await User.findOne({ email });
  if (!finduser) {
    res.status(404);
    throw new Error("invalid email");
  } else {
    if (await bcrypt.compare(password, finduser.password)) {
      res.send(finduser);
    } else {
      res.status(401);
      throw new Error("invalid password");
    }
  }
});



const uploadImage = Asynchandler(async (req, res) => {
  const user_id = req.params.user_id;
  const { imageUrl } = req.body;

  const findUser = await User.findOne({ _id: user_id });
  if (!findUser) {
    res.status(404);
    throw new Error("Invalid user ID");
  } else {
    findUser.image = imageUrl;
    await findUser.save();
    res.json({ user: findUser }); // Return the full user object
  }
});


module.exports = { registeruser, loginuser ,uploadImage};
