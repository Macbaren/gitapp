import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { getReadme } from '../../redux/reducers/repositories'

const Project = () => {
  const dispatch = useDispatch()
  const { username, repository } = useParams()
  const readme = useSelector((state) => state.repositories.readme)
  useEffect(() => {
    dispatch(getReadme(username, repository))
  }, [username])
  return (
    <div>
      <div className="flex items-center justify-start h-screen flex-col">
        <div className="w-full h-10 bg-green-200">
          This is {username} {repository} repository README
        </div>
        <div className="bg-yellow-200 text-black font-bold rounded-lg border shadow-lg p-10">
          <ReactMarkdown source={readme} />
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {}
export default Project
