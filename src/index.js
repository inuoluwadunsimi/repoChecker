import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Signup from "./Signup"
import { store } from "./app/store"
import { Provider } from "react-redux"
import {
  FirebaseAppProvider,
  AuthProvider,
  useFirebaseApp,
} from "reactfire"
import { firebaseConfig } from "./firebase.config"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { getAuth } from "firebase/auth"
const root = ReactDOM.createRoot(
  document.getElementById("root")
)

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>
  // <FirebaseAppProvider
  //   firebaseConfig={firebaseConfig}
  // >
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </FirebaseAppProvider>
)
