import { Film, GitHub, Icon, Mail, Music } from "react-feather"
import { Route } from "../nimatullo-types"

const links = ["projects", "media", "resume", "memes", "about", "home"] as const
const socials = ["github", "applemusic", "letterboxd", "mail"] as const

type Socials = typeof socials[number]
export type Links = typeof links[number]

const homePageRoutesMap: { [link in Links]: Route } = {
  home: {
    title: "Home",
    description: "welcome",
    emoji: { name: "house", fallback: "🏠" },
    link: "/",
    showInHome: false,
    showInNav: true,
  },
  projects: {
    title: "Projects",
    description: "things i make",
    emoji: { name: "clipartrocket", fallback: "🚀" },
    link: "/projects",
    showInHome: true,
    showInNav: true,
  },
  media: {
    title: "Media",
    description: "books, music, reading",
    emoji: { name: "artist", fallback: "🎨" },
    link: "/media",
    showInHome: true,
    showInNav: true,
  },
  resume: {
    title: "Resume",
    description:
      "make sure you look them in their hands when you shake their eyes",
    emoji: { name: "business", fallback: "💼" },
    link: "/resume",
    showInHome: true,
    showInNav: true,
  },
  memes: {
    title: "Memes",
    description: "**bad**",
    emoji: { name: "clownonball", fallback: "🤡" },
    link: "/memes",
    showInHome: true,
  },
  about: {
    title: "About",
    description: "me",
    emoji: { name: "man-raising-hand", fallback: "🙋‍♂️" },
    link: "/about",
    showInHome: false,
    showInNav: true,
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
    title: "Music",
    href: "https://last.fm/user/nimatullo",
    icon: Music,
  },
  letterboxd: {
    title: "Letterboxd",
    href: "https://letterboxd.com/nimatullo/",
    icon: Film,
  },
  mail: {
    title: "Mail",
    href: "mailto:sherzod@nimatullo.com",
    icon: Mail,
  },
}

export const homePageRoutes = Object.values(homePageRoutesMap).filter(
  (r) => r.showInHome
)
export const footerRoutes = Object.values(footerRoutesMap)
export const navRoutes = Object.values(homePageRoutesMap).filter(
  (r) => r.showInNav
)
