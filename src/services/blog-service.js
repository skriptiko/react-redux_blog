export default class BlogService {

	_apiBase = 'https://simple-blog-api.crew.red';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}/${url}`);
		if (!res.ok) {
			throw new Error('Error');
		}
		return await res.json();
	}

	async getListPosts() {
		return await this.getResource('posts/');
	}

	async getCommentsByPostId(id) {
		return await this.getResource(`posts/${id}?_embed=comments`);
	}

	async setNewComment(postId, text) {
		const rawResponse = await fetch(
		`${this._apiBase}/comments`,
		{
    		method: 'POST',
    		headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json'
    		},
    		body: JSON.stringify({postId: postId, body: text})
    	});
  		return await rawResponse.json();
	}

	async setNewPost (title, body) {

		const rawResponse = await fetch(
		`${this._apiBase}/posts`,
		{
    		method: 'POST',
    		headers: {
    			'Content-Type': 'application/json'
    		},
    		body: JSON.stringify({title, body})

    	});
  		return await rawResponse.json();
	}

	async deletePost (id) {
		const rawResponse = await fetch(
		`${this._apiBase}/posts/${id}`,
		{
    		method: 'DELETE',
    		headers: {
    			'Content-Type': 'application/json'
    		},
    		data: ''

    	});
  		return await rawResponse.json();
	}
}