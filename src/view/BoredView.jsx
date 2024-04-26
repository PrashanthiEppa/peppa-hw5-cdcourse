import React, { useState } from 'react'
import { fetchActivity } from '../model/BoredModel'

const BoredView = () => {
  const [activity, setActivity] = useState('')

  const handleClick = async () => {
    const newActivity = await fetchActivity()
    setActivity(newActivity)
  }

  return (
    <div>
      <h1>  Welcome Bored Application!!! </h1>
      <p>{activity || 'Click the button to get a suggestion'}</p>
      <button onClick={handleClick}>Submit On Hint </button>
    </div>
  )
}

export default BoredView