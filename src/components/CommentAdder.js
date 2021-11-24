import { postCommentToReviewById } from '../utils/api'
import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const CommentAdder = ({ commentAdded }) => {
  const { id } = useParams()
  const { currentUser } = useContext(UserContext)
  const [newComment, setNewComment] = useState('');

  // useEffect(() => {
  //   postCommentToReviewById(id).then((comment) => {
  //     setAddComment(comment)
  //   })
  // }, [id])

  const updateComment = (event) => setNewComment(event.target.value)

  const postComment = async () => {
    const newComm = await postCommentToReviewById(id, newComment, currentUser)
    commentAdded()
    return newComm
  }

  return (
    <div className='CommentAdder'>
      <textarea placeholder='Write your comment here...' onChange={updateComment} /> <br></br>
      <button type='submit' onClick={postComment}>Post comment</button>
    </div>
  )
}

export default CommentAdder