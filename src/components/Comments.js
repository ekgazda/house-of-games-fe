import { getCommentsByReviewId, deleteCommentById } from '../utils/api'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { UserContext } from '../contexts/UserContext'
import CommentAdder from './CommentAdder'
import ErrorPage from './ErrorPage'

const Comments = () => {
  const { id } = useParams()
  const { currentUser } = useContext(UserContext)
  const [comments, setComments] = useState([])
  const [addedComment, setAddedComment] = useState(0)
  const [err, setErr] = useState(null)

  useEffect(() => {
    getCommentsByReviewId(id)
      .then((comments) => {
        setComments(comments)
      })
      .catch((err) => {
        setErr(err.response)
      })
  }, [id, addedComment])

  const deleteComment = (commentId) => {
    deleteCommentById(commentId)
      .then((res) => {
        setComments((prevComm) => {
          return prevComm.filter((comment) => comment.comment_id !== commentId)
        })
      })
      .catch((err) => {
        setErr(err.response)
      })
  }

  if (err) {
    return <ErrorPage err={err} />
  }

  return (
    <>
      <span className="Comments">
        {comments.map((comment) => {
          return (
            <div className="CommentCard" key={comment.comment_id}>
              <p>
                <b>{comment.author}</b> says:
              </p>
              <p>{comment.body}</p>
              <p>
                <i>
                  posted:{' '}
                  {moment(comment.created_at).format('YYYY-MM-DD HH:mm')}
                </i>
              </p>
              {currentUser === comment.author && (
                <button onClick={() => deleteComment(comment.comment_id)}>
                  Delete
                </button>
              )}
            </div>
          )
        })}
        <CommentAdder setAddedComment={setAddedComment} />
      </span>
    </>
  )
}

export default Comments
