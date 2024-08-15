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

interface LinkWithDisplay {
  title: string
  url: string
}

interface MyThings extends LinkWithDisplay {
  url?: string
}

interface Project extends LinkWithDisplay {
  description: string
  github?: string
  url?: string
}
