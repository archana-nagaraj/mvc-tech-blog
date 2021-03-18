const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// users can post many posts 
User.hasMany(Post, {
    foreignKey: 'user_id'
}); 

// a post is specific to one user 
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// a comment is specific to one user 
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// a comment is specific to one user 
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// users can post many comments 
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// users can post many posts 
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };