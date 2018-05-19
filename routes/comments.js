module.exports = {
  getComments(req, res) {
  	id = req.params.postId
	res.status(200).send(req.store.posts[id].comments)
  }, 
  addComment(req, res) {
  	id = req.params.postId
	newComment = req.body
	commentId = req.store.posts[id].comments.length
	req.store.posts[id].comments.push(newComment)
	res.status(201).send({id: commentId})
  },
  updateComment(req, res) {
  	id = req.params.postId
	commentId = req.params.commentId
        upd = req.body
        if (upd && upd.text != undefined)
  		req.store.posts[id].comments[commentId].text = upd.text
        res.status(200).send(req.store.posts[id].comments[commentId])
  },
  removeComment(req, res) {
  	id = req.params.postId
	commentId = req.params.commentId
	req.store.posts[id].comments.splice(commentId, 1)
	res.status(204).send()
  }  
}
