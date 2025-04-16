import { Developer } from "./Developer";
import { Post } from "./Post";
import { Comment } from "./Comment";

// Developer Associations
Developer.hasMany(Post, {
  foreignKey: "developer_id",
});
// Post Associations
Post.belongsTo(Developer, {
  foreignKey: "developer_id",
});

// Comment Associations
Comment.belongsTo(Developer, {
  foreignKey: "developer_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Developer.hasMany(Comment, {
  foreignKey: "developer_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

export { Developer, Post, Comment };
