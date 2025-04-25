import { User, Post, Comment } from "../../models/index.js"; // Adjust the path to your models folder
import { sequelize } from "../../config/connections.js"; // Adjust the path to your sequelize connection
import { users, posts, comments } from "./seedData.js";

const seedDatabase = async () => {
  try {
    // Disable foreign key checks temporarily
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");

    // Drop and recreate tables
    await User.sync({ force: true });
    await Post.sync({ force: true });
    await Comment.sync({ force: true });

    // Re-enable foreign key checks
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

    await User.bulkCreate(users, { individualHooks: true }); // Use hooks for password hashing
    console.log("Users seeded successfully!");

    await Post.bulkCreate(posts, { individualHooks: true }); // Use hooks for password hashing
    console.log("Posts seeded successfully!");

    await Comment.bulkCreate(comments, { individualHooks: true }); // Use hooks for password hashing
    console.log("Comments seeded successfully!");

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit();
  }
};

seedDatabase();
