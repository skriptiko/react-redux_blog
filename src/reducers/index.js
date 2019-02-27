const initialState = {
	posts: [],
	loading: true
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'POSTS_REQUESTED':
			return {
				posts: [],
				loading: true
			}
		case 'POSTS_LOADED':
			return {
				posts: action.data,
				loading: false
			}
		default:
			return state;
	}
}

export default reducer;

// import updatePostList from './post-list';

// const reducer = (state, action) => {
//   return {
//     postList: updatePostList(state, action),
//   };
// };

// export default reducer;