import { navigate } from "gatsby"

/** Matches Gatsby `navigate(to, options)` for string destinations. */
type GatsbyNavigateOptions = NonNullable<
  Parameters<typeof navigate> extends {
    (to: string, options?: infer O): unknown
    (to: number): unknown
  }
    ? O
    : never
>

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function startViewTransition(update: () => void | Promise<unknown>): void {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void | Promise<unknown>) => {
      finished: Promise<void>
    }
  }
  if (typeof doc.startViewTransition === "function" && !prefersReducedMotion()) {
    doc.startViewTransition(update)
  } else {
    void update()
  }
}

export function navigateWithViewTransition(
  to: string,
  options?: GatsbyNavigateOptions
): void {
  startViewTransition(() => navigate(to, options))
}

function isModifiedClick(e: MouseEvent): boolean {
  return (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey
  )
}

export function registerViewTransitionLinkClick(): void {
  if (typeof window === "undefined") return

  document.addEventListener(
    "click",
    (e: MouseEvent) => {
      if (isModifiedClick(e)) return
      const el = e.target
      if (!(el instanceof Element)) return
      const anchor = el.closest("a")
      if (!(anchor instanceof HTMLAnchorElement)) return
      if (anchor.hasAttribute("download")) return
      const target = anchor.target
      if (target && target !== "" && target !== "_self") return

      const raw = anchor.getAttribute("href")
      if (raw == null || raw === "" || raw.startsWith("#")) return

      let url: URL
      try {
        url = new URL(raw, window.location.href)
      } catch {
        return
      }

      if (url.protocol !== "http:" && url.protocol !== "https:") return
      if (url.origin !== window.location.origin) return

      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return
      }

      e.preventDefault()
      navigateWithViewTransition(url.pathname + url.search + url.hash)
    },
    true
  )
}
