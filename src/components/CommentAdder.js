import { postCommentToReviewById } from '../utils/api'
import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const CommentAdder = ({ commentAdded }) => {
  const { id } = useParams()
  const { currentUser } = useContext(UserContext)
  let [newComment, setNewComment] = useState('')

  const getComment = (event) => setNewComment(event.target.value)

  const postComment = async () => {
    const newComm = await postCommentToReviewById(id, newComment, currentUser)
    commentAdded()
    setNewComment('')
    return newComm
  }

  return (
    <div className="CommentAdder">
      <textarea
        placeholder="Write your comment here..."
        value={newComment}
        onChange={getComment}
      />{' '}
      <br></br>
      <button type="submit" onClick={postComment}>
        Post comment
      </button>
      Logged in as <b>{currentUser}</b>
    </div>
  )
}

export default CommentAdder
