import axios from 'axios'

const getRepoUrl = (username) => `https://api.github.com/users/${username}/repos`
const getReadmeUrl = (username, repo) => `https://api.github.com/repos/${username}/${repo}/readme`

const UPDATE_REPOS = 'UPDATE_REPOS'
const UPDATE_README = 'UPDATE_README'

const initialState = {
  username: 'xxx',
  repository: 'xxx',
  list: ['1', '2', '3'],
  readme: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REPOS:
      return {
        ...state,
        username: action.username,
        list: action.list
      }
    case UPDATE_README:
      return {
        ...state,
        username: action.username,
        readme: action.readme,
        repository: action.repository
      }
    default:
      return state
  }
}

export function getRepos(username) {
  return (dispatch) => {
    axios(getRepoUrl(username))
      .then(({ data }) => data)
      .then((result) => {
        dispatch({ type: UPDATE_REPOS, list: result.map((it) => it.name), username })
      })
  }
}

export function getReadme(username, repository) {
  return (dispatch) => {
    axios(getReadmeUrl(username, repository))
      .then(({ data }) => data)
      .then((result) => {
        dispatch({ type: UPDATE_README, readme: atob(result.content), username, repository })
      })
  }
}
