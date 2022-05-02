import React, { useState } from "react"
import {
  BookIcon,
  RepoIcon,
  TableIcon,
  PackageIcon,
  StarIcon,
} from "@primer/octicons-react"
import {
  useGetStarsQuery,
  useGetRepoNoQuery,
} from "../API/githubApi"
import { useUser } from "reactfire"
const tabList = [
  {
    icon: <BookIcon size={24} />,
    label: "Overview",
    badge: "",
  },
  {
    icon: <RepoIcon size={24} />,
    label: "Repositories",
    badge: "0",
  },
  {
    icon: <TableIcon size={24} />,
    label: "Projects",
    badge: "",
  },
  {
    icon: <PackageIcon size={24} />,
    label: "Packages",
    badge: "",
  },
  {
    icon: <StarIcon size={24} />,
    label: "Star",
    badge: "0",
  },
]

function Tabs() {
  const [activeTab, setActiveTab] = useState(1)
  const user = useUser()
  const uid = user.data?.providerData[0]?.uid
  console.log("uid", uid)
  const {
    data: stars,
    loading,
    error,
  } = useGetStarsQuery(uid)

  const { data: repoNo, isFetching } =
    useGetRepoNoQuery(uid)

  return (
    <>
      <div className='flex justify-center w-[80%] mx-auto mt-10 max-w-[750px]'>
        {tabList.map((tab, index) => {
          return (
            <div className='flex-1 flex flex-col hover:bg-gray-200'>
              <div className='flex gap-2 w-full justify-center py-2 rounded-lg'>
                {tab.icon}
                <div className='flex'>
                  <h1>{tab.label}</h1>
                </div>
                {tab.badge && (
                  <div className='bg-gray-300 px-1 py-0.5 rounded-xl'>
                    {tab.badge}
                    {index === 1
                      ? repoNo?.length
                      : index === 4
                      ? stars?.length
                      : 0}{" "}
                  </div>
                )}
              </div>
              {index === activeTab && (
                <div className='h-0.5 bg-red-500'></div>
              )}
            </div>
          )
        })}
      </div>
      <div className='bg-gray-300 h-[1px]'></div>
    </>
  )
}

export default Tabs
