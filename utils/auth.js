const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    // Check if the request is an API call
    if (req.originalUrl.startsWith("/api/")) {
      return res.status(401).json({ message: "Unauthorized. Please log in." });
    }
    // Redirect for non-API routes
    return res.redirect("/login");
  }
    next();
  
};

export { withAuth };
