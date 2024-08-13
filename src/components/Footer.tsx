import { footerRoutes } from "@app/routes"
import styled from "@emotion/styled"

const FooterWrapper = styled.footer({
  display: "flex",
  margin: "50px 0",
  minWidth: "30vw",
  justifyContent: "center",
  flexDirection: "column",
})

const UnorderedList = styled.ul({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "1rem",
  textAlign: "center",
  listStyle: "none",
})

export function Footer() {
  return (
    <FooterWrapper>
      <UnorderedList>
        {footerRoutes.map((r) => (
          <li>
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
