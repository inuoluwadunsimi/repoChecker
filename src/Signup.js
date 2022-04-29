import { app } from "./firebase.config";
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

function Signup() {
  const githubProvider =
    new GithubAuthProvider();
  const auth = getAuth();

  const githubSignUp = () => {
    signInWithPopup(auth,githubProvider)
    .then((response)=> {
        console.log(response.user)
    })
  };

  return (
    <div>
      <button onClick={githubSignUp} className='bg-blue-500 px-6 py-4 rounded-lg shadow'>
        Github
      </button>
    </div>
  );
}

export default Signup;
