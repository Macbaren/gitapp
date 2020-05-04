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
      <div className="flex justify-start h-screen flex-col">
        <div
          className="bg-green-100 border-t border-b border-green-600 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">
            This is readme.md file of GitHub {repository} repository from {username} user
          </p>
          <p className="text-sm">If you see nothing - this repository have no readme.md</p>
        </div>
        <div className="bg-yellow-200 text-black textAlign:responsive font-bold rounded-lg border shadow-lg p-10 m-10">
          <ReactMarkdown source={readme} />
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {}
export default Project
