import { User } from "../../models/index.js";
import express from "express";
const router = express.Router();

// Define CRUD user-routes below.

// get all users
router.get("/", (req, res) => {
  // Find all users.
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single user
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
// post a user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((newUser) => res.json(newUser))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
// update a user
router.put("/:id", (req, res) => {
  // Change everyone without a last name to "Doe"
  User.update(req.body, {
    where: {
      id: req.body.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "User not found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// delete a user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedUser) => {
      if (!deletedUser) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(deletedUser);
    })
    .catch((err) => {
      console.log(err);
      res.json(500).json(err);
    });
});

export default router;
