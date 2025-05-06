import { Router } from "express";
import { User, Post, Comment } from "../models/index.js";
import { platform } from "os";
const router = Router();

// render homepage with all posts
router.get("/", (req, res) => {
  console.log(req.session);

  Post.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
    order: [["created_at", "DESC"]], // Most recent posts first
  }).then((dbPostData) => {
    // Serialize data so the template can read it
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  });
});

// render a single post
router.get("/posts/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["comment"],
      },
    ],
  }).then((dbPostData) => {
    if (!dbPostData) {
      res.status(404).json({ message: "Cannot locate post with this id" });
      return;
    }
    const post = dbPostData.get({ plain: true });

    res.render("single-post", { post });
  });
});

// render login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
// render singup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

export default router;
