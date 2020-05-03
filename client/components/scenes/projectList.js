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
      <div className="flex items-center justify-start h-screen flex-col">
        <div className="w-full h-10 bg-green-200">{username}</div>
        <div className="font-bold w-full px-5 border shadow-lg p-10 flex flex-col">
          {list.map((it) => (
            <div className="p-1 my-1" key={it}>
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
