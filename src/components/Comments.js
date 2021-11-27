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
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  const updateComments = () => {
    setLoading(true)
    getCommentsByReviewId(id)
      .then((comments) => {
        setLoading(false)
        setComments(comments)
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }

  useEffect(() => {
    updateComments()
  }, [id]) // eslint-disable-line

  const deleteComment = (commentId) => {
    setLoading(true)
    deleteCommentById(commentId)
      .then((res) => {
        setLoading(false)
        setComments((prevComm) => {
          return prevComm.filter((comment) => comment.comment_id !== commentId)
        })
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }

  if (loading) {
    return <p>Loading...</p>
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
        <CommentAdder commentAdded={updateComments} />
      </span>
    </>
  )
}

export default Comments
