const jwt = require('jsonwebtoken');

// Middleware for JWT verification
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenWoBearer = token.split(' ')[1];
  console.log(tokenWoBearer);

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(tokenWoBearer, 'jwt1234', (error, decodedToken) => {
    if (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = decodedToken.userId;
    next();
  });
};

module.exports = verifyToken;