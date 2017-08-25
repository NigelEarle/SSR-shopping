const isAuthenticated = (req, res, next) => {  
  if (req.isAuthenticated()) return next();
  
  res
  .status(401)
  .json({ error: 'Unauthorized' });
};

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.isAdmin) return next();
  }

  res
  .status(401)
  .json({ error: 'Unauthorized - not Admin' });
};

module.exports = {
  isAuthenticated,
  isAdmin,
};
