import type { EmojiName } from "./components/Emoji"

interface EmojiProps {
  name: EmojiName
  fallback: string
}

interface Route {
  link: string
  title: string
  description: string
  emoji: Emoji
  showInNav?: boolean
  showInHome?: boolean
}

interface Playlist {
  name: string
  source: string
}

interface HoarderLink {
  title: string
  url: string
}

interface Project {
  title: string
  description: string
  github?: string
  link?: string
}
