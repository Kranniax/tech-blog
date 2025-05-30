import { Router } from "express";
import { User, Post, Comment } from "../../models/index.js";
import { withAuthAPI } from "../../utils/auth.js";

const router = Router();

// get all comments
router.get("/", (req, res) => {
  Comment.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Post,
        attributes: ["title"],
      },
    ],
  })
    .then((dbCommentData) => {
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred", details: err });
    });
});
// // get a comment
// router.get("/:id", (req, res) => {});

// create a comment
router.post("/", withAuthAPI, (req, res) => {
  Comment.create({
    comment: req.body.comment,
    post_id: req.body.post_id,
    user_id: req.session.user_id,
  })
    .then((dbCommentData) => res.status(200).json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// // update a comment
// router.put("/:id", (req, res) => {});

// delete a comment
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedComment) => {
      if (!deletedComment) {
        res.status(404).json({ error: "Cannot locate comment with this id" });
        return;
      }
      res.status(200).json(deletedComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

export default router;
