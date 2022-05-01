import React from "react"
import { useUser, useAuth } from "reactfire"
import { useNavigate } from "react-router-dom"
import { useGetFollowersQuery } from "../API/githubApi"

function ProfileData() {
  const user = useUser()
  console.log(user)

  const [data] = useGetFollowersQuery()
  console.log(data)

  return (
    <div>
      <div>
        <img
          className='rounded-full ring-2 ring-gray-300 w-96 h-96 b'
          src={user.data.photoURL}
          alt='Profile'
        />
        <img src='' alt='' />
      </div>

      <div className='ml-4 mt-4'>
        <h3 className='text-black font-semibold text-3xl'>
          {user.data.displayName}
        </h3>
        <p className='text-xl'>{user.data.displayName}</p>
      </div>
      <div>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-3'>
          Follow
        </button>
      </div>
    </div>
  )
}

export default ProfileData
