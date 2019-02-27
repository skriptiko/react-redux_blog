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

	// getListPosts() {
	// 	return [
	// 		{id: 1, title: 'Title --- 1', body: 'body --- 1'},
	// 		{id: 2, title: 'Title --- 2', body: 'body --- 2'},
	// 	];
	// }
}