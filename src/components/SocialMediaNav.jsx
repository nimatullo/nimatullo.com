import React from "react"
import { Film, GitHub, Mail, Music } from "react-feather"
import "../styles/socialmedianav.css"

const SocialmediaNav = () => {
  const [commit, setCommit] = React.useState("")

  React.useEffect(() => {
    const ghApiUrl =
      "https://api.github.com/repos/nimatullo/nimatullo.com/commits"
    fetch(ghApiUrl)
      .then((res) => res.json())
      .then((json) => setCommit(json[0].sha))
  }, [])
  return (
    <footer>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://github.com/nimatullo"
            title="Github"
          >
            <GitHub size="2em" strokeWidth={2} color="red" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://music.apple.com/profile/nimatullo"
            title="Apple Music"
          >
            <Music size="2em" strokeWidth={2} color="green" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://letterboxd.com/nimatullo/"
            title="Letterboxd"
          >
            <Film size="2em" strokeWidth={2} color="purple" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:sherzod@nimatullo.com"
            title="Email"
          >
            <Mail size="2em" strokeWidth={2} color="blue" />
          </a>
        </li>
      </ul>
      {/* <a target="_blank" rel="noreferrer" href="https://josh8.com">
        Stay Connected
      </a> */}
      <StayConnected />
      <div className="current-build">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/nimatullo/nimatullo.com/commit/${commit}`}
        >
          {commit.substring(0, 7)}
        </a>
      </div>
    </footer>
  )
}

const StayConnected = () => {
  const [colors, setColors] = React.useState([
    "red",
    "green",
    "blue",
    "purple",
    "gold",
    "coral",
  ])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColors((prevColors) => {
        const newColors = [...prevColors]
        const lastColor = newColors.pop()
        newColors.unshift(lastColor)
        return newColors
      })
    }, 100) // Interval time in milliseconds, you can adjust this as needed

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {Array.from("Stay Connected").map((letter, index) => (
        <a
          target="_blank"
          rel="noreferrer"
          href="https://josh8.com"
          key={index}
          style={{ color: colors[index % colors.length] }}
        >
          {letter}
        </a>
      ))}
    </div>
  )
}
export default SocialmediaNav
