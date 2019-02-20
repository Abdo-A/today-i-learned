const jwt = require('jsonwebtoken');

const keys = require('../../config/keys');

const loginUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = {};

  if (email !== keys.email || password !== keys.password) {
    errors.incorrectinfo = 'Incorrect email or password';
    return res.status(400).json(errors);
  }

  // JWT Payload
  const TokenPayload = {
    info: keys.info
  };

  // Make JWT
  jwt.sign(
    TokenPayload,
    keys.secretOrKey,
    // { expiresIn: 604800 },
    (err, token) => {
      return res.json({ success: true, token: 'Bearer ' + token });
    }
  );
};

module.exports = loginUser;
