import React from "react"
import "../styles/socialmedianav.css"
import instagram from "../svg/instagram.svg"
import twitter from "../svg/twitter.svg"
import github from "../svg/github.svg"
import email from "../svg/email.svg"
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"

const SocialmediaNav = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://instagram.com/sherzodnimatullo">
            <FaInstagram size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a href="http://twitter.com">
            <FaTwitter size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a href="http://github.com/mmvvpp123">
            <FaGithub size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a href="mailto:sherzodnimatullo@turtle.nyc">
            <FaEnvelope size="2em" color="#1c1c1c" />
          </a>
        </li>
      </ul>
      <a href="https://josh8.com">Stay Connected</a>
    </footer>
  )
}

export default SocialmediaNav
