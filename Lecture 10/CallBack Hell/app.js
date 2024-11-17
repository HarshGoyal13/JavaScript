

/*
Callback Hell refers to a situation in JavaScript 
where multiple nested callbacks
are used to handle asynchronous operations, 
making the code hard to read, maintain, and debug. 
It's often described as a "pyramid of doom" 
because the code structure resembles a deeply nested triangle.

*/






function getUser(userId, callback) {
    setTimeout(() => {
      console.log("Fetched user data");
      callback({ id: userId, name: "John Doe" });
    }, 1000);
  }
  
  function getPosts(userId, callback) {
    setTimeout(() => {
      console.log("Fetched posts for user");
      callback([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }]);
    }, 1000);
  }
  
  function getComments(postId, callback) {
    setTimeout(() => {
      console.log("Fetched comments for post");
      callback(["Comment 1", "Comment 2"]);
    }, 1000);
  }
  
  // Callback Hell
  getUser(1, function (user) {
    getPosts(user.id, function (posts) {
      getComments(posts[0].id, function (comments) {
        console.log("Comments:", comments);
      });
    });
  });
  