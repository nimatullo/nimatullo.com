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
}
