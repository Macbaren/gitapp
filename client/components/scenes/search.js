import React, { useState } from 'react'
import { history } from '../../redux'

const Search = () => {
  const [repository, setRepository] = useState('')
  const navigateToTheRepo = () => {
    history.push(`/${repository}`)
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-yellow-300 font-bold rounded-lg border shadow-lg p-10">
          <input
            className="text-black p-2"
            type="text"
            placeholder="Enter your repo"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />
          <button className="ml-4 p-2" type="button" onClick={navigateToTheRepo}>
            GO
          </button>
        </div>
      </div>
    </div>
  )
}

Search.propTypes = {}

export default Search
