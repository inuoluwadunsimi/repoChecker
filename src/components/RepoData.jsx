import React from "react"
import { useGetReposQuery } from "../API/githubApi"
import { useUser } from "reactfire"
import { Orbit } from "@uiball/loaders"
import RepoSearch from "./RepoSearch"
import {
  StarIcon,
  TriangleDownIcon,
} from "@primer/octicons-react"

function RepoData() {
  const human = useUser()
  const page = 20

  const uid = human.data?.providerData[0]?.uid

  const {
    data: repos,
    error,
    isLoading,
  } = useGetReposQuery(uid, page)

  if (isLoading) {
    return
    ;<div className='col-span-2 grid place-items-center'>
      {" "}
      <Orbit size={35} />
    </div>
  }
  if (error) {
    return <div> error </div>
  }
  return (
    <div className='col-span-5'>
      <RepoSearch />
      {repos.map((repo) => (
        <div className='flex'>
          <div className='flex flex-1 justify-between'>
            <div>
              <h3 className='text-xl text-blue-700 font-bold'>
                {" "}
                <a href={repo.html_url}>{repo.name}</a>
              </h3>
              <div>Public</div>
              <p>{repo.description}</p>
              <div className='flex gap-2'>
                <p>{repo.language}</p>
                {repo.stargazer_count > 0 && (
                  <div>
                    <StarIcon size={24} className='mt-2' />
                    {repo.stargazer_count}
                  </div>
                )}
                <p>{repo.updated_at}</p>
              </div>
            </div>
            <div>
              <p>
                {" "}
                <StarIcon /> Star{" "}
              </p>
              <p>
                {" "}
                <TriangleDownIcon />{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default RepoData
