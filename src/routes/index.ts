import { Film, GitHub, Icon, Mail, Music } from "react-feather"
import { Route } from "../nimatullo-types"

const links = ["projects", "media", "resume", "memes"] as const
const socials = ["github", "applemusic", "letterboxd", "mail"] as const

type Socials = typeof socials[number]
type Link = typeof links[number]

const homePageRoutesMap: { [link in Link]: Route } = {
  projects: {
    title: "Projects",
    description: "things i make",
    emoji: { name: "clipartrocket", fallback: "🚀" },
    link: "/projects",
  },
  media: {
    title: "Media",
    description: "books, music, reading",
    emoji: { name: "artist", fallback: "🎨" },
    link: "/media",
  },
  resume: {
    title: "Resume",
    description:
      "make sure you look them in their eyes when you shake their hand",
    emoji: { name: "business", fallback: "💼" },
    link: "/resume",
  },
  memes: {
    title: "Memes",
    description: "**bad**",
    emoji: { name: "clownonball", fallback: "🤡" },
    link: "/memes",
  },
}

interface Social {
  title: string
  href: string
  icon: Icon
}

const footerRoutesMap: { [social in Socials]: Social } = {
  github: {
    title: "GitHub",
    href: "https://github.com/nimatullo",
    icon: GitHub,
  },
  applemusic: {
    title: "Apple Music",
    href: "https://music.apple.com/profile/nimatullo",
    icon: Music,
  },
  letterboxd: {
    title: "Letterboxd",
    href: "https://letterboxd.com/nimatullo/",
    icon: Film,
  },
  mail: {
    title: "Email",
    href: "mailto:sherzod@nimatullo.com",
    icon: Mail,
  },
}

export const homePageRoutes = Object.values(homePageRoutesMap)
export const footerRoutes = Object.values(footerRoutesMap)
