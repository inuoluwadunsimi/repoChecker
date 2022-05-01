import React from "react"
import { useUser, useAuth } from "reactfire"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import ProfileData from "./components/ProfileData"
import Navbar from "./components/Navbar"
function Homepage() {
  const auth = useAuth()
  const signOuthandler = () => {
    signOut(auth).then(
      console.log("successfully signed out")
    )
  }
  const user = useUser()
  console.log(user)
  const navigate = useNavigate()
  if (user.status !== "success") {
    navigate("/signup")
  }
  return (
    <>
      <div>
        <Navbar />
        <ProfileData />
      </div>
    </>
  )
}

export default Homepage
