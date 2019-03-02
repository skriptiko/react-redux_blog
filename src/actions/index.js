
const postsLoaded = (posts) => {
  return {
    type: 'POSTS_LOADED',
    data: posts
  };
};

const postRequasted = () => {
  return {
    type: 'POSTS_REQUESTED'
  };
};

const commentsLoaded = (comments) => {
  return {
    type: 'COMMENTS_LOADED',
    data: comments
  };
};

const addNewPost = (post) => {
  return {
    type: 'ADD_NEW_POST',
    data: post
  };
};

const addNewComment = (comment) => {
  return {
    type: 'ADD_NEW_COMMENT',
    data: comment
  };
};

export {
  postsLoaded,
  postRequasted,
  commentsLoaded,
  addNewPost,
  addNewComment
};