import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../../redux'
import { getRepos } from '../../redux/reducers/repositories'

const Search = () => {
  const dispatch = useDispatch()
  const [repository, setRepository] = useState('')
  const navigateToTheRepo = () => {
    if (repository.length === 0) {
      alert("Please, enter user's name")
    }
    dispatch(getRepos(repository))
    history.push(`/${repository}`)
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-yellow-300 font-bold rounded-lg border shadow-lg p-10">
          <div className="text-black p-2">GitHub UserName</div>
          <input
            className="text-black p-2 rounded"
            type="text"
            placeholder="Enter user's name"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={navigateToTheRepo}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Search.propTypes = {}

export default Search
