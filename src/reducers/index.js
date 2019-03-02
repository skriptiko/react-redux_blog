const initialState = {
	posts: [],
	loading: true,
	postId: null,
	isRedirectToPostList: false
}

const reducer = (state = initialState, action) => {
	
	switch (action.type) {
		case 'POSTS_REQUESTED':
			return {
				posts: [],
				loading: true,
				postId: null,
				isRedirectToPostList: false
			}
		case 'POSTS_LOADED':
			return {
				posts: action.data,
				loading: false,
				postId: null,
				isRedirectToPostList: false
			}
		case 'COMMENTS_REQUESTED':
			return {
				posts: state.data,
				loading: true,
				postId: null,
				isRedirectToPostList: false
			}
		case 'COMMENTS_LOADED':
			state.posts.forEach((item) => {
				if (item.id === action.data.id) {
					item.comments = action.data.comments;
				}
			});
			return {
				posts: state.posts,
				loading: false,
				postId: action.data.id,
				isRedirectToPostList: false
			}

		case 'ADD_NEW_POST':
			state.posts.push(action.data);
			return {
				posts: state.posts,
				loading: false,
				postId: action.data.id,
				isRedirectToPostList: true
			}

		case 'ADD_NEW_COMMENT':
			state.posts.forEach((item) => {
				if (item.id === action.data.postId) {
					if (!item.comments) item.comments = [];
					item.comments.push(action.data);
				}
			});
			console.log('44444444444', state.posts, action.data)
			return {
				posts: state.posts,
				loading: false,
				postId: action.data.postId,
				isRedirectToPostList: false
			}
		default:
			return state;
	}
}

export default reducer;
