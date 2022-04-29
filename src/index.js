import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { FirebaseAppProvider } from "reactfire";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <FirebaseAppProvider
  //   firebaseConfig={firebaseConfig}
  // >
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </FirebaseAppProvider>
);
