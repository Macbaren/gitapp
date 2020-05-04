import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getRepos } from '../../redux/reducers/repositories'

const ProjectList = () => {
  const { username } = useParams()
  const dispatch = useDispatch()
  const list = useSelector((state) => state.repositories.list)
  const repository = useSelector((state) => state.repositories.repository)

  useEffect(() => {
    if(repository !== username) {
      dispatch(getRepos(username))
    }
  }, [username, repository])

  return (
    <div>
      <div>
        <div
          className="bg-green-100 border-t border-b border-green-600 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">GitHub pepositories of {username}</p>
          <p className="text-sm">For open readme.md click on the link below</p>
        </div>
        <div className="font-bold w-full px-5 p-10 flex flex-col">
          {list.map((it) => (
            <div
              className="bg-yellow-100 hover:bg-yellow-200 rounded-lg border shadow-lg p-2 pl-4 my-1"
              key={it}
            >
              {' '}
              <Link to={`/${username}/${it}`}>{it}</Link>{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ProjectList.propTypes = {}

export default ProjectList
