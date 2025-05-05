import session from "express-session";
import { User, Post, Comment } from "../../models/index.js";
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
    include: [
      {
        // Loads posts created by the user
        model: Post,
        attributes: ["id", "title", "content", "created_at"],
      },
      // include the Comment model here:
      {
        model: Comment,
        attributes: ["id", "comment", "created_at"],
        include: {
          model: Post,
          attributes: ["title"],
        },
      },
    ],
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
    .then((newUser) => {
      res.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.username = newUser.username;
        req.session.loggedIn = true;

        res.json(newUser);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
// login api authentication
router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(async (dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    // Verify user
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});
// update a user
router.put("/:id", (req, res) => {
  // Change everyone without a last name to "Doe"
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
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

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

export default router;
