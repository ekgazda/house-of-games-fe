import { postCommentToReviewById } from '../utils/api'
import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const CommentAdder = ({ setAddedComment }) => {
  const { id } = useParams()
  const { currentUser } = useContext(UserContext)
  const [newComment, setNewComment] = useState('')

  const getComment = (event) => setNewComment(event.target.value)

  const postComment = (event) => {
    event.preventDefault()
      postCommentToReviewById(id, newComment, currentUser).then(() => {
        setAddedComment(prevComm => prevComm + 1)
        setNewComment('')
      })
  }

  return (
    <div className="CommentAdder">
      <form onSubmit={postComment}>
        <textarea
          placeholder="Write your comment here..."
          value={newComment}
          onChange={getComment}
          required
        />{' '}
        <br></br>
        <button type="submit">Post</button>
      </form>
      Logged in as <b>{currentUser}</b>
    </div>
  )
}

export default CommentAdder
