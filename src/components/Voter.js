import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { updateVotesOnReviewById } from '../utils/api'

const Voter = ({reviewId, votes, author}) => {
  const [addedVotes, setAddedVotes] = useState(0)
  const { currentUser } = useContext(UserContext)

  const addVotes = () => {
    updateVotesOnReviewById(reviewId, 1).then(() => {
      setAddedVotes(addedVotes => addedVotes + 1)
    })
  }

  const removeVotes = () => {
    updateVotesOnReviewById(reviewId, -1).then(() => {
      setAddedVotes(addedVotes => addedVotes - 1)
    })
  }

  return (
    <>
      <i>votes:</i> {votes + addedVotes}
      {author !== currentUser && <button className="VoteBtn" onClick={addVotes}>Vote up</button>}
      {author !== currentUser && <button className="VoteBtn" onClick={removeVotes}>Vote down</button>}
    </>
  )

}

export default Voter