import React from "react"
import { useUser, useAuth } from "reactfire"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import Navbar from "./components/Navbar"
import Tabs from "./components/Tabs"
import ProfileData from "./components/ProfileData"
import RepoData from "./components/RepoData"
function Homepage() {
  const auth = useAuth()
  const signOuthandler = () => {
    signOut(auth).then(
      console.log("successfully signed out")
    )
  }
  const user = useUser()

  const navigate = useNavigate()

  if (!user.data) {
    navigate("/signup")
  }
  return (
    <>
      <Navbar />
      <Tabs />
      <div className='grid grid-cols-7 container mx-auto gap-4'>
        <ProfileData />
        <RepoData />
      </div>

      <button onClick={signOuthandler}>sign out</button>
    </>
  )
}

export default Homepage
