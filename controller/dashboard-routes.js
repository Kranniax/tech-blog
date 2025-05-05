import { Router } from "express";
import { User, Post } from "../models/index.js";

const router = Router();
// get the posts for a single user
router.get("/", (req, res) => {
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
  }).then((dbPostData) => {
    if (!dbPostData) {
      res.status(404).json({ message: "Posts cannot be found from this user" });
      return;
    }
    // serialize db data before rendering.
    const userPosts = dbPostData.map((post) => post.get({ plain: true }));

    // render data to dashboard handlebars template.
    res.render("dashboard", { userPosts });
  });
});

export default router;
