
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

export {
  postsLoaded,
  postRequasted,
  commentsLoaded
};