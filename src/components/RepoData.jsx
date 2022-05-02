import React from "react"
import { useGetReposQuery } from "../API/githubApi"
import { useUser } from "reactfire"

function RepoCard() {
  const human = useUser()
  const page = 20

  const uid = human.data?.providerData[0]?.uid

  const {
    data: repos,
    error,
    isLoading,
  } = useGetReposQuery(uid, page)

  console.log(repos)
  return (
    <div>
      {repos.map((repo) => (
        <div className='flex flex-col justify-between'>
          <div>
            <h3>
              {" "}
              <a href={repo.html_url}>{repo.name}</a>
            </h3>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  )
}
export default RepoCard
