import { Router } from "express";
import { User, Post } from "../models/index.js";

const router = Router();
// get the posts for a single user
router.get("/:id", (req, res) => {
  User.findAll({
    where: {
      id: req.params.id,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(404).json({ message: "Posts cannot be found from this user" });
      return;
    }
  });
});

export default router;
