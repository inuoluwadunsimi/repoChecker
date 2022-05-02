import React from "react"
import { useGetUserDetailsQuery } from "../API/githubApi"
import { Orbit } from "@uiball/loaders"
import { useUser } from "reactfire"
import {
  PeopleIcon,
  DotFillIcon,
  LocationIcon,
  MailIcon,
  LinkIcon,
  OrganizationIcon,
} from "@primer/octicons-react"
import { FaTwitter } from "react-icons/fa"

function ProfileData() {
  const person = useUser()

  const uid = person.data?.providerData[0]?.uid
  const {
    data: user,
    error,
    isLoading,
  } = useGetUserDetailsQuery(uid)

  console.log("ProfileData", uid, user, isLoading, error)

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
    <div className='col-span-2'>
      <div>
        <img
          className='rounded-full ring-gray-300 ring-2  w-[90%] mx-auto -mt-12'
          src={user.avatar_url}
          alt='profile'
        />
        <div className='mt-6  '>
          <h3 className='font-bold text-2xl  '>
            {user.name}
          </h3>
          <p className='text-xl text-gray-500'>
            {user.login}
          </p>
        </div>
      </div>
      <button className='bg-transparent text-black font-semibold py-2 px-4 border border-gray-300 rounded w-full mt-4 bg-gray-100'>
        Follow
      </button>
      {user.bio && (
        <p className='mt-6 text-xl'>{user.bio}</p>
      )}
      <div className='flex gap-2 flex-row mt-2 mb-4'>
        <PeopleIcon size={16} className='mt-1' />
        <p>{user.followers} followers</p>
        <DotFillIcon
          size={12}
          className='flex items-center mt-2'
        />
        <p>{user.following} following</p>
      </div>
      {user.location && (
        <div className='flex mt-2 gap-2'>
          <LocationIcon size={16} />
          <p>{user.location}</p>
        </div>
      )}
      {user.email && (
        <div className='flex mt-2 gap-2'>
          <MailIcon size={16} />
          <p>{user.email}</p>
        </div>
      )}
      {user.twitter_username && (
        <div className='flex mt-2 gap-2'>
          <FaTwitter size={16} className='mt-1' />
          <p>{user.twitter_username}</p>
        </div>
      )}
      {user.blog && (
        <div className='flex mt-2 gap-2'>
          <LinkIcon size={16} className='mt-1' />
          <a href={user.blog}>{user.blog}</a>
        </div>
      )}
      {user.company && (
        <div className='flex mt-2 gap-2'>
          <OrganizationIcon size={16} className='mt-1' />
          <p>{user.company}</p>
        </div>
      )}
      <div className='bg-gray-300 h-[1px] mt-4'></div>
    </div>
  )
}

export default ProfileData
