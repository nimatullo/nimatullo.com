import { footerRoutes } from "@app/routes"
import { UnorderedList } from "@components/scaffold/UnorderedList"
import styled from "@emotion/styled"

const FooterWrapper = styled.footer({
  display: "flex",
  margin: "50px 0",
  minWidth: "30vw",
  justifyContent: "center",
  flexDirection: "column",
})

export function Footer({
  onHover,
}: {
  onHover?: (title: string | null) => void
}) {
  return (
    <FooterWrapper>
      <UnorderedList>
        {footerRoutes.map((r) => (
          <li
            onMouseOver={() => onHover?.(r.title)}
            onMouseLeave={() => onHover?.(null)}
          >
            <a
              title={r.title}
              rel="noopener noreferrer"
              target="_blank"
              href={r.href}
            >
              <r.icon />
            </a>
          </li>
        ))}
      </UnorderedList>
    </FooterWrapper>
  )
}
