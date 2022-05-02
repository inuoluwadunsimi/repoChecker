import React from "react"
import { useGetReposQuery } from "../API/githubApi"
import { useUser } from "reactfire"
import { TriangleDownIcon } from "@primer/octicons-react"

function RepoSearch() {
  const man = useUser()
  const page = 20

  const uid = man.data?.providerData[0]?.uid
  const { data: Search, isLoading } = useGetReposQuery(
    uid,
    page
  )
  return (
    <div className='flex flex-row justify-between'>
      <div>
        <input
          className='text-gray-300 rounded-lg h-auto py-2 px-4 border border-gray-300  w-full'
          type='text'
          placeholder='Find a repository...'
        />
      </div>
      <div className='flex flex-row gap-2'>
        <button className='flex flex-row bg-gray-300 rounded-lg border'>
          <p>Type</p>{" "}
          <TriangleDownIcon size={12} className='mt-2' />{" "}
        </button>
        <button>
          <p>Language</p> <TriangleDownIcon size={12} />
        </button>
        <button>
          Sort <TriangleDownIcon size={12} />
        </button>
      </div>
    </div>
  )
}

export default RepoSearch
