import { db } from "@app/db"
import { useAuth } from "@app/hooks"
import { LinkWithDisplay, MyThings, Project } from "@app/nimatullo-types"
import styled from "@emotion/styled"
import "firebaseui/dist/firebaseui.css"
import { PageProps, navigate } from "gatsby"
import React from "react"

type Options = keyof typeof db

const TextField = styled.input({
  width: "100%",
  padding: "0.5rem",
  fontSize: "1rem",
  margin: "0.5rem 0",
})

const SubmitButton = styled.button((props) => ({
  padding: "0.5rem",
  fontSize: "1rem",
  marginBottom: "1rem",
  backgroundColor: props.theme.twColors.neutral[900],
  color: props.theme.twColors.neutral[100],
  border: "none",
  cursor: "pointer",
  transition: "0.2s ease all",
  "&:hover": {
    backgroundColor: props.theme.twColors.neutral[500],
  },
}))

const CMSPage = (props: PageProps) => {
  const additionsOptions = Object.keys(db).map((key) => ({
    label: key,
    value: key,
  }))

  const [selected, setSelected] = React.useState<Options>(
    additionsOptions[0].value as Options
  )

  const { currentUser } = useAuth()

  if (!currentUser) {
    navigate("/cms/login")
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
