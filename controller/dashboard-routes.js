import { Router } from "express";
import { User, Post } from "../models/index.js";

const router = Router();
// get the posts for a single user
router.get("/:id", (req, res) => {
  Post.findAll({
    where: {
      user_id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(404).json({ message: "Posts cannot be found from this user" });
      return;
    }
    // serialize db data before rendering.
    const userData = dbUserData.map((user) => user.get({ plain: true }));
    // res.json(dbUserData);

    // render data to dashboard handlebars template.
    res.render("dashboard", { userData });
  });
});

export default router;
