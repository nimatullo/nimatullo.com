import { auth } from "@app/config/firebaseConfig"
import { db, TimestampedDocumentData, type Options } from "@app/db"
import { uploadImage } from "@app/lib/cloudinary"
import {
  FirebaseCollectionModel,
  modelMap,
  PictureModel,
} from "@app/model/FirebaseCollectionModel"
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
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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

      <ModelAddForm model={modelMap[selected]} />
      <SubmitButton onClick={() => signOut(auth)}>Sign Out</SubmitButton>
    </div>
  )
}

const GenericTextFieldForm = <
  T extends FirebaseCollectionModel<TimestampedDocumentData, Object>
>({
  model,
}: {
  model: T
}) => {
  const [value, setValue] = React.useState<TimestampedDocumentData>(
    model.initialValues
  )
  const [success, setSuccess] = React.useState(false)

  const handleSubmit = async () => {
    model.add(value).then(() => {
      setSuccess(true)
      setValue(model.initialValues)

      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    })
  }

  return (
    <div>
      {success && <div css={{ marginBottom: 5 }}>✅ good shit</div>}

      {model.fields.map((f) => (
        <TextField
          key={f.label}
          value={f.getValue(value)}
          onChange={(e) => {
            setValue({
              ...value,
              [f.key]: e.target.value,
            })
          }}
          placeholder={f.label + (f.optional ? " (optional)" : "")}
          type={f.type}
        />
      ))}

      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </div>
  )
}

const PictureUploadForm = ({ model }: { model: PictureModel }) => {
  const [file, setFile] = React.useState<File | null>(null)
  const [success, setSuccess] = React.useState(false)

  const handleUpload = async () => {
    if (file) {
      const url = await uploadImage(file)
      model.add({ file: url })
      setSuccess(true)
      setFile(null)

      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    }
  }

  return (
    <div>
      {success && <div css={{ marginBottom: 5 }}>✅ Upload successful</div>}
      <UploadWidget onUpload={setFile} />
      {file && <SubmitButton onClick={handleUpload}>Upload</SubmitButton>}
    </div>
  )
}

const ModelAddForm = <
  T extends FirebaseCollectionModel<TimestampedDocumentData, Object>
>({
  model,
}: {
  model: T
}) => {
  switch (model.modelType) {
    case "image":
      return <PictureUploadForm model={model} />
    case "text":
      return <GenericTextFieldForm model={model} />
    default:
      return null
  }
}

export default CMSPage

export const Head = () => <Helmet title="cms" />
