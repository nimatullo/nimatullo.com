import { auth } from "@app/config/firebaseConfig"
import firebase from "firebase/compat/app"
import * as firebaseui from "firebaseui"
import { navigate } from "gatsby"
import React from "react"

const AuthForm = ({ onSuccess }: { onSuccess: () => void }) => {
  React.useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
      ],
      callbacks: {
        signInSuccessWithAuthResult: (res, redirect) => {
          // custom renavigation
          if (res.user) {
            navigate("/cms")
          }
          return false
        },
      },
    })
  }, [])

  return <div id="firebaseui-auth-container"></div>
}

export default AuthForm
