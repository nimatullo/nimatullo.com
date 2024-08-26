import { auth } from "@app/config/firebaseConfig"
import { db } from "@app/db"
import { LinkWithDisplay, MyThings, Project } from "@app/nimatullo-types"
import { randomHSLColor } from "@app/styles/colors"
import styled from "@emotion/styled"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth"
import { PageProps } from "gatsby"
import React from "react"

type Options = keyof typeof db

const TextField = styled.input({
  width: "100%",
  padding: "0.5rem",
  fontSize: "1rem",
  margin: "0.5rem 0",
})

const SubmitButton = styled.button((props) => ({
  padding: "0 16px",
  height: "40px",
  lineHeight: "1",
  fontSize: "1rem",
  marginBottom: "1rem",
  textTransform: "uppercase",
  backgroundColor: props.theme.twColors.neutral[900],
  color: props.theme.twColors.neutral[100],
  cursor: "pointer",
  border: `3px solid ${randomHSLColor(1)}`,
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
      <select onChange={(e) => setSelected(e.target.value as Options)}>
        {additionsOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <AdditionsForm selectedOption={selected} />
      <SubmitButton onClick={() => signOut(auth)}>Sign Out</SubmitButton>
    </div>
  )
}

const AdditionsForm = ({ selectedOption }: { selectedOption?: Options }) => {
  switch (selectedOption) {
    case "playlists":
      return <LinkAddForm onAdd={(d) => db.playlists.add(d)} />
    case "links":
      return <LinkAddForm onAdd={(d) => db.links.add(d)} />
    case "projects":
      return <AddProjectsForm onAdd={(d) => db.projects.add(d)} />
    case "memes":
      return <UrlAddForm onAdd={(d) => db.memes.add(d)} />
    case "things":
      return <ThingsAddForm onAdd={(d) => db.things.add(d)} />
    default:
      return null
  }
}

const AddProjectsForm = ({ onAdd }: { onAdd: (d: Project) => void }) => {
  const [values, setValues] = React.useState<Project>({
    title: "",
    description: "",
  })

  const handleSubmit = () => {
    if (
      values.title.trim().length == 0 ||
      values.description.trim().length == 0
    )
      return
    else onAdd(values)
  }

  return (
    <div>
      <TextField
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        type="text"
        placeholder="Title"
      />
      <TextField
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        type="text"
        placeholder="Description"
      />
      <TextField
        value={values.url}
        onChange={(e) => setValues({ ...values, url: e.target.value })}
        type="text"
        placeholder="URL (optional)"
      />
      <TextField
        value={values.github}
        onChange={(e) => setValues({ ...values, github: e.target.value })}
        type="text"
        placeholder="Github (optional)"
      />
      <SubmitButton onClick={handleSubmit}>Add</SubmitButton>
    </div>
  )
}

const UrlAddForm = ({ onAdd }: { onAdd: (d: { url: string }) => void }) => {
  const [url, setUrl] = React.useState("")

  const handleSubmit = () => {
    if (url.trim().length == 0) return
    else onAdd({ url })
  }

  return (
    <div>
      <TextField
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder="URL"
      />
      <SubmitButton onClick={handleSubmit}>Add</SubmitButton>
    </div>
  )
}

const LinkAddForm = ({ onAdd }: { onAdd: (d: LinkWithDisplay) => void }) => {
  const [values, setValues] = React.useState<LinkWithDisplay>({
    title: "",
    url: "",
  })

  const handleSubmit = () => {
    if (values.title.trim().length == 0 || values.url.trim().length == 0) return
    else onAdd(values)
  }

  return (
    <div>
      <TextField
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        type="text"
        placeholder="Title"
      />
      <TextField
        value={values.url}
        onChange={(e) => setValues({ ...values, url: e.target.value })}
        type="text"
        placeholder="URL"
      />
      <SubmitButton onClick={handleSubmit}>Add</SubmitButton>
    </div>
  )
}

const ThingsAddForm = ({ onAdd }: { onAdd: (d: MyThings) => void }) => {
  const [values, setValues] = React.useState<MyThings>({
    title: "",
  })

  const handleSubmit = () => {
    if (values.title.trim().length == 0) return
    else onAdd(values)
  }

  return (
    <div>
      <TextField
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        type="text"
        placeholder="Title"
      />
      <TextField
        value={values.url}
        onChange={(e) => setValues({ ...values, url: e.target.value })}
        type="text"
        placeholder="URL (optional)"
      />
      <SubmitButton onClick={handleSubmit}>Add</SubmitButton>
    </div>
  )
}

export default CMSPage
