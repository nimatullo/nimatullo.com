import { footerRoutes } from "@app/routes"
import { randomHSLColor } from "@app/styles/colors"
import { ColumnList } from "@components/scaffold/List"
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
      <ColumnList>
        {footerRoutes.map((r) => (
          <li
            key={r.title}
            onMouseOver={() => onHover?.(r.title)}
            onMouseLeave={() => onHover?.(null)}
          >
            <a
              title={r.title}
              rel="noopener noreferrer"
              target="_blank"
              href={r.href}
            >
              <r.icon
                css={{ mixBlendMode: "color-dodge" }}
                stroke={randomHSLColor(1)}
              />
            </a>
          </li>
        ))}
      </ColumnList>
    </FooterWrapper>
  )
}
