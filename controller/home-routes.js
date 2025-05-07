import { Router } from "express";
import { User, Post, Comment } from "../models/index.js";

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
        attributes: ["comment", "user_id", "createdAt"],
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "Cannot locate post with this id" });
        return;
      }
      // res.json(dbPostData);
      const post = dbPostData.get({ plain: true });
      // console.log(post);
      

      res.render("single-post", { post , loggedIn: req.session.loggedIn});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
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
