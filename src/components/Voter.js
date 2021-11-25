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

  const isDisabled = author === currentUser

  return (
    <>
      <i>votes:</i> {votes + addedVotes}
      <button className="VoteBtn" onClick={addVotes} disabled={isDisabled}>Vote up</button>
      <button className="VoteBtn" onClick={removeVotes} disabled={isDisabled}>Vote down</button>
    </>
  )

}

export default Voter