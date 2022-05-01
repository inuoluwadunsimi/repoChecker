import Signup from "./Signup"
import { getAuth } from "firebase/auth"
import { AuthProvider, useFirebaseApp } from "reactfire"
import Homepage from "./Homepage"
import {
  useNavigate,
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom"

function App() {
  const app = useFirebaseApp()
  const auth = getAuth(app)
  return (
    <AuthProvider sdk={auth}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

function AppBody() {}
export default App
