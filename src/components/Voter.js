import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { updateVotesOnReviewById } from '../utils/api'

const Voter = ({ reviewId, votes, author }) => {
  const [addedVotes, setAddedVotes] = useState(0)
  const [voted, setVoted] = useState(false)
  const { currentUser } = useContext(UserContext)

  const addVotes = () => {
    updateVotesOnReviewById(reviewId, 1).catch()
    setAddedVotes((addedVotes) => addedVotes + 1)
    setVoted(true)
  }

  const removeVotes = () => {
    updateVotesOnReviewById(reviewId, -1).catch()
    setAddedVotes((addedVotes) => addedVotes - 1)
    setVoted(true)
  }

  return (
    <>
      <i>votes:</i> {votes + addedVotes}
      {author !== currentUser ? (
        <>
          <button className="VoteBtn" onClick={addVotes} disabled={voted === true}>
            Vote up
          </button>
          <button className="VoteBtn" onClick={removeVotes} disabled={voted === true}>
            Vote down
          </button>
        </>
      ) : (
        <>
          <p id="cantVoteMsg">* voting is disabled for own reviews</p>
        </>
      )}
    </>
  )
}

export default Voter
