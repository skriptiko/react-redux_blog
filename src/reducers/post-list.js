const updatePostList = (state, action) => {

  if (state === undefined) {
    return {
      posts: [
      {title: 'Title --- 0', body: 'body --- 0'},
      {title: 'Title --- 1', body: 'body --- 1'},
    ],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_POST_REQUEST':
      return {
        posts: [],
        loading: true,
        error: null
      };

    case 'FETCH_POST_SUCCESS':
      return {
        posts: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_POST_FAILURE':
      return {
        posts: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.postList;
  }
};

export default updatePostList;