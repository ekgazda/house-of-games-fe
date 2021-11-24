import { getCommentsByReviewId } from '../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import CommentAdder from './CommentAdder'

const Comments = () => {
  const { id } = useParams()
  const [comments, setComments] = useState([])

  const updateComments = () => {
    getCommentsByReviewId(id).then((comments) => {
      setComments(comments)
    })
  }

  useEffect(() => {
    updateComments()
  }, [id])

  return (
    <>
      <span className="Comments">
        {comments.map((comment) => {
          return (
            <div className="CommentCard" key={comment.comment_id}>
              {comment.comment_id}
              <p><b>{comment.author}</b> says:</p>
              <p>{comment.body}</p>
              <p><i>posted: {moment(comment.created_at).format("YYYY-MM-DD HH:mm")}</i></p>
            </div>
          )
        })}
        <CommentAdder commentAdded={updateComments} />
      </span>
    </>
  )
}

export default Comments
