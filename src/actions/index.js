
const postsLoaded = (newPosts) => {
  return {
    type: 'POSTS_LOADED',
    data: newPosts
  };
};


const postRequasted = (newPosts) => {
  return {
    type: 'POSTS_REQUESTED'
  };
};

export {
  postsLoaded,
  postRequasted
};