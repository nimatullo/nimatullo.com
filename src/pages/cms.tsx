import { auth } from "@app/config/firebaseConfig"
import { db, type Options } from "@app/db"
import { BaseModel, modelMap } from "@app/model/ModelDeclarations"
import { randomHSLColor } from "@app/styles/colors"
import { getBorderedContainerStyle } from "@app/styles/css"
import { Helmet } from "@components/scaffold/Head"
import { UploadWidget } from "@components/UploadWidget"
import styled from "@emotion/styled"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth"
import { PageProps } from "gatsby"
import React from "react"
import { Path, useForm } from "react-hook-form"

const TextField = styled.input((props) => ({
  ...getBorderedContainerStyle(props.theme),
  width: "100%",
  padding: "0.5rem",
  fontSize: "1rem",
  margin: "0.5rem 0",
}))

export const SubmitButton = styled.button((props) => ({
  ...getBorderedContainerStyle(props.theme),
  padding: "0 16px",
  height: "40px",
  lineHeight: "1",
  fontSize: "1rem",
  marginBottom: "1rem",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "0.2s ease all",
  "&:hover": {
    transform: "translateY(-2px)",
    backgroundColor: randomHSLColor(1),
    borderColor: randomHSLColor(1),
    boxShadow:
      "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
  },
}))

const LoginForm = ({ onLogin }: { onLogin: (user: User) => void }) => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        onLogin(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      })
  }

  return (
    <div>
      <TextField
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        type="text"
        placeholder="Email"
      />
      <TextField
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        type="password"
        placeholder="Password"
      />
      <SubmitButton onClick={handleLogin}>Login</SubmitButton>
    </div>
  )
}

const CMSPage = (props: PageProps) => {
  const additionsOptions = Object.keys(db).map((key) => ({
    label: key,
    value: key,
  }))

  const [selected, setSelected] = React.useState<Options>(
    additionsOptions[0].value as Options
  )

  const [currentUser, setCurrentUser] = React.useState<User | null>(
    auth.currentUser
  )

  React.useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) =>
      setCurrentUser(user)
    )

    return () => listener()
  }, [])

  if (!currentUser) {
    return <LoginForm onLogin={setCurrentUser} />
  }

  return (
    <div css={{ margin: "0.5rem 0" }}>
      <select
        css={{ padding: "0.2rem", fontSize: "1rem", margin: "0.5rem 0" }}
        onChange={(e) => setSelected(e.target.value as Options)}
      >
        {additionsOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label.toUpperCase()}
          </option>
        ))}
      </select>

      <ModelBasedForm model={modelMap[selected]} />

      <SubmitButton onClick={() => signOut(auth)}>Sign Out</SubmitButton>
    </div>
  )
}

const ModelBasedForm = <S extends Object, T extends BaseModel<S>>({
  model,
}: {
  model: T
}) => {
  const { register, handleSubmit } = useForm<S>()

  const onSubmit = handleSubmit((data) => model.save(data))

  return (
    <div>
      {model.fields.map((field) => {
        switch (field.type) {
          case "text":
          case "number":
            return (
              <TextField
                key={field.key as string}
                placeholder={field.label}
                {...register(field.key as Path<S>)}
              />
            )
          case "image":
            return (
              <UploadWidget key={field.key as string} register={register} />
            )
          default:
            return null
        }
      })}
      <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
    </div>
  )
}

export default CMSPage

export const Head = () => <Helmet title="cms" />
