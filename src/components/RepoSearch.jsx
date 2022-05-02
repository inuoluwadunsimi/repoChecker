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
    <div className='flex flex-row justify-between gap-4'>
      <input
        className='placeholder:text-gray-300 flex-[2] rounded-lg h-auto py-2 px-4 border border-gray-300  w-full'
        type='text'
        placeholder='Find a repository...'
      />

      <div className='flex flex-row gap-2 flex-1 '>
        <SearchDropdown title='Type' />
        <SearchDropdown title='Language' />
        <SearchDropdown title='sort' />
      </div>
    </div>
  )
}
function SearchDropdown({ title }) {
  return (
    <button className='flex flex-1 flex-row bg-gray-300 rounded-lg border items-center justify-center'>
      <p>{title}</p>{" "}
      <TriangleDownIcon size={12} className='mt-2' />
    </button>
  )
}

export default RepoSearch
