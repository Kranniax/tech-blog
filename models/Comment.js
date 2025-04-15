import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/connections";

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    developer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "developer",
        key: "id",
      },
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    freezeTableName: true,
    underscored: true,
    modelName: "User", // We need to choose the model name
  }
);

export { Comment };
