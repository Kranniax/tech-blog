import { User } from "../../models/User.js"; // Adjust the path to your models folder
import { sequelize } from "../../config/connections.js"; // Adjust the path to your sequelize connection

const seedUsers = async () => {
  try {
    // await sequelize.sync({ force: true }); // Drops and recreates the database tables
    // Disable foreign key checks temporarily
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");

    // Drop and recreate tables
    await sequelize.sync({ force: true });

    // Re-enable foreign key checks
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
    const users = [
      {
        username: "john_doe",
        email: "john.doe@example.com",
        password: "password123", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "jane_smith",
        email: "jane.smith@example.com",
        password: "securePass456", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "alex_jones",
        email: "alex.jones@example.com",
        password: "alexPass789", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "sarah_wilson",
        email: "sarah.wilson@example.com",
        password: "wilsonPass321", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "mike_brown",
        email: "mike.brown@example.com",
        password: "brownPass654", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "emma_taylor",
        email: "emma.taylor@example.com",
        password: "taylorEm123", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "david_miller",
        email: "david.miller@example.com",
        password: "millerD456", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "olivia_johnson",
        email: "olivia.johnson@example.com",
        password: "oliviaJ789", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "james_williams",
        email: "james.williams@example.com",
        password: "williamsJ321", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "sophia_davis",
        email: "sophia.davis@example.com",
        password: "davisS654", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "ethan_garcia",
        email: "ethan.garcia@example.com",
        password: "garciaE123", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "ava_rodriguez",
        email: "ava.rodriguez@example.com",
        password: "rodriguezA456", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "noah_martinez",
        email: "noah.martinez@example.com",
        password: "martinezN789", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "isabella_clark",
        email: "isabella.clark@example.com",
        password: "clarkI321", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "mason_lewis",
        email: "mason.lewis@example.com",
        password: "lewisM654", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "mia_lee",
        email: "mia.lee@example.com",
        password: "leeM123", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "jacob_walker",
        email: "jacob.walker@example.com",
        password: "walkerJ456", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "charlotte_hall",
        email: "charlotte.hall@example.com",
        password: "hallC789", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "logan_allen",
        email: "logan.allen@example.com",
        password: "allenL321", // Ensure passwords are hashed in your model hooks
      },
      {
        username: "amelia_king",
        email: "amelia.king@example.com",
        password: "kingA654", // Ensure passwords are hashed in your model hooks
      },
    ];

    await User.bulkCreate(users, { individualHooks: true }); // Use hooks for password hashing
    console.log("Users seeded successfully!");
  } catch (error) {
    console.error("Error seeding users:", error);
  } finally {
    process.exit();
  }
};

seedUsers();
