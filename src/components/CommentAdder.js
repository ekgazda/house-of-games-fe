import { postCommentToReviewById } from '../utils/api'
import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const CommentAdder = ({ commentAdded }) => {
  const { id } = useParams()
  const { currentUser } = useContext(UserContext)
  const [newComment, setNewComment] = useState('')

  const getComment = (event) => setNewComment(event.target.value)

  const postComment = (event) => {
    event.preventDefault()
    if (newComment.length > 0) {
      postCommentToReviewById(id, newComment, currentUser).then(() => {
        commentAdded()
        setNewComment('')
      })
    }
  }

  return (
    <div className="CommentAdder">
      <form onSubmit={postComment}>
        <textarea
          placeholder="Write your comment here..."
          value={newComment}
          onChange={getComment}
        />{' '}
        <br></br>
        <button type="submit">Post</button>
      </form>
      Logged in as <b>{currentUser}</b>
    </div>
  )
}

export default CommentAdder
