/* const userRoleMiddleware = (req, res, next) => {
    try {
      if (!req.email) {
        return res.sendStatus(401);
      }
      if (req.user.role !== 'Admin', 'User') {
        return res.sendStatus(403);
      }
      next();
    } catch (err) {
      next(err);
    }
  }
  
  module.exports = userRoleMiddleware; */