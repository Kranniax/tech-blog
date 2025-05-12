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
router.get("/new", withAuth, (req, res) => {
  // render new-post template
  res.render("new-post", { loggedIn: req.session.loggedIn });
});
// edit a post from dashboard
router.get("/edit/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["title", "content"],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      // Serialize the data for Handlebars
      const post = dbPostData.get({ plain: true });

      // render new-post template
      res.render("edit-post", { ...post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to load post for editing." });
    });
});

export default router;
