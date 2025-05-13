// Authentication for api routes
const withAuthAPI = (req, res, next) => {
  if (!req.session.user_id) {
    return res.status(401).json({ message: "Unauthorized. Please log in." });
  }
  next();
};
// Authentication for non-api routes.
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

export { withAuth, withAuthAPI };
