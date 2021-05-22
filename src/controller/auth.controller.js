const Users = require('../models/Users');
const passwordManager = require('../utils/password.utils');
const jwtManager = require('../utils/jwt.utils');

class AuthController {
  constructor() {
    this.Users = Users;
    this.passwordManager = passwordManager;
    this.jwtManager = jwtManager;
  }

  signup = async (req, res, next) => {
    try {
      const userFromDb = await this.Users.findOne({ email: req.body.email });

      if (userFromDb) {
        return res.status(400).json({ message: 'Usuário já está cadastrado' });
      }

      const encryptedPassword = this.passwordManager.encrypt(req.body.password);

      const newUser = new this.Users({
        ...req.body,
        password: encryptedPassword,
      });

      await newUser.save();

      res
        .status(201)
        .json({ message: `User with id ${newUser._id} created successfully` });
    } catch (error) {}
  };

  login = async (req, res, next) => {
    try {
      const userFromDb = await this.Users.findOne({ email: req.body.email });

      if (!userFromDb) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }

      const checkPassword = await this.passwordManager.verify(
        req.body.password,
        userFromDb.password
      );

      if (!checkPassword) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }

      const token = this.jwtManager.generateAuthToken(userFromDb);

      res.status(200).json({ message: token });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = new AuthController();
