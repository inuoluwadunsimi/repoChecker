import React from "react"
import { useGetReposQuery } from "../API/githubApi"

function Repoo() {
  const { data: repo, isFetching } = useGetReposQuery()
  return (
    <div>
      <hr />
      <div>
        <h3></h3>
      </div>
    </div>
  )
}

export default Repoo
