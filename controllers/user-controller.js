const User = require("../models/user");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  try {
    const user = await User.create({
      name,
      email,
      password: hash,
      role,
    });

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(201).json({
      success: true,
      data: user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "User not found",
      });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({
        success: false,
        error: "Password is invalid",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      success: true,
      data: user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const user = await User.findByPk(id);

    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
      user.password = hash;
    }

    await user.save();

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const DeleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.destroy({
      where: { id },
    });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  Register,
  Login,
  DeleteUser,
  UpdateUser,
};
