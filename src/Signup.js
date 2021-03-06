import { useGetReposQuery } from "./API/githubApi"
import { useAuth, useUser } from "reactfire"
import {
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { AiFillGithub } from "react-icons/ai"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Spinner from "./components/Spinner"

function Signup() {
  const githubProvider = new GithubAuthProvider()
  const [login, setLogin] = useState(false)
  const [uid, setUid] = useState("")

  const auth = useAuth()

  const navigate = useNavigate()
  const githubSignUp = () => {
    signInWithPopup(auth, githubProvider).then(
      (response) => {
        setUid(response.user.providerData[0].uid)
        setLogin(true)
      }
    )
  }
  useEffect(() => {
    if (login) {
      navigate("/")
    }
  }, [login, navigate])

  return (
    <div className='h-screen'>
      <Navbar />
      <div className=' h-full grid place-items-center'>
        <div className=' w-[90%] max-w-[800px] items-center rounded-lg shadow-lg flex flex-col justify-center py-8 gap-4'>
          <h1 className='text-3xl font-semibold text-center '>
            Welcome back
          </h1>
          <div className=''>
            <p className='text-center text-base text-indigo-800 font-semibold mb-4 '>
              sign in with
            </p>
            <button
              onClick={githubSignUp}
              className='bg-[#0c162d] flex text-white items-center px-6 gap-2  py-4 rounded-lg shadow'
            >
              <AiFillGithub size={25} />
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
function DataStealer({ uid, page }) {
  console.log(uid)
  console.log(page)
  const { data, error, isLoading } = useGetReposQuery(
    uid,
    page
  )
  if (isLoading) {
    return (
      <h1>
        {" "}
        <Spinner />{" "}
      </h1>
    )
  }
  if (error) {
    return <h1>error</h1>
  }
  return <div>{JSON.stringify(data)}</div>
}

export default Signup
