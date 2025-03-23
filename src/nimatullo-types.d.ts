import { PageProps } from "gatsby"
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

interface SSRPageProps<V, K extends string> extends PageProps {
  serverData: { [key in K]: V }
}

namespace CMS {
  interface Link {
    url: string
  }

  interface LinkWithDisplay extends Link {
    title: string
  }

  interface AboutPageLinks extends LinkWithDisplay {
    url?: string
  }

  interface Project extends LinkWithDisplay {
    description: string
    github?: string
    url?: string
  }

  interface Picture {
    fileList: FileList
  }
}
