import { Router } from "express";
import { User, Post } from "../models/index.js";
import { withAuth } from "../utils/auth.js";

const router = Router();
// get the posts for a single user
router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
    order: [["created_at", "DESC"]],
  }).then((dbPostData) => {
    if (!dbPostData) {
      res.status(404).json({ message: "Posts cannot be found from this user" });
      return;
    }
    // serialize db data before rendering.
    const userPosts = dbPostData.map((post) => post.get({ plain: true }));

    // render data to dashboard handlebars template.
    res.render("dashboard", {
      userPosts,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
    });
  });
});

// create new post from dashboard 
router.get("/new", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  // render new-post template
  res.render("new-post", { loggedIn: req.session.loggedIn });
});

export default router;
