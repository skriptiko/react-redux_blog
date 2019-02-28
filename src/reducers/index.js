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
		case 'COMMENTS_REQUESTED':
			return {
				posts: state.data,
				loading: true
			}
		case 'COMMENTS_LOADED':
			state.posts.forEach((item) => {
				if (item.id === action.data.id) {
					item.comments = action.data.comments;
				}
			});
			return {
				posts: state.posts,
				loading: false
			}
		default:
			return state;
	}
}

export default reducer;
