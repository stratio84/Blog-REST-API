module.exports = {
  getPosts(req, res) {
	res.status(200).send(req.store.posts)
  },
  addPost(req, res) {
	newPost = req.body
	newPost.comments = []
	id = req.store.posts.length
	req.store.posts.push(newPost)
	res.status(201).send({id: id})
  },
  updatePost(req, res) {
	id = req.params.postId
	upd = req.body
	if (upd.name != undefined)
		req.store.posts[id].name = upd.name
	if (upd.url != undefined)
		req.store.posts[id].url = upd.url
	if (upd.text != undefined)
		req.store.posts[id].text = upd.text
	res.status(200).send(req.store.posts[id])
  },
  removePost(req, res) {
	id = req.params.postId
	req.store.posts.splice(id, 1)
	res.status(204).send()
  }
}
