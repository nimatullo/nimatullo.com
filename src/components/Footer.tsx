import { useCursorHandlers } from "@app/hooks"
import { footerRoutes } from "@app/routes"
import { randomHSLColor } from "@app/styles/colors"
import { Flex } from "@components/scaffold"
import { ExternalAnchor } from "@components/scaffold/ExternalAnchor"
import { ColumnList } from "@components/scaffold/List"
import styled from "@emotion/styled"
import React from "react"

const FooterWrapper = styled.footer({
  display: "flex",
  margin: "50px 0",
  minWidth: "30vw",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
})

export function Footer({
  onHover,
}: {
  onHover?: (title: string | null) => void
}) {
  const [commitSHA, setCommitSHA] = React.useState<string | null>(null)
  const mouseHandlers = useCursorHandlers()

  React.useEffect(() => {
    const ghApiUrl =
      "https://api.github.com/repos/nimatullo/nimatullo.com/commits"
    fetch(ghApiUrl)
      .then((res) => res.json())
      .then((json) => setCommitSHA(json[0].sha))
      .catch((err) => console.error(err))
  }, [])

  return (
    <FooterWrapper>
      <ColumnList column={footerRoutes.length}>
        {footerRoutes.map((r) => (
          <li
            key={r.title}
            onMouseOver={() => onHover?.(r.title)}
            onMouseLeave={() => onHover?.(null)}
          >
            <a
              {...mouseHandlers}
              title={r.title}
              rel="noopener noreferrer"
              target="_blank"
              href={r.href}
            >
              <r.icon
                css={{
                  mixBlendMode: "color-dodge",
                  "&:hover": { strokeWidth: 3 },
                }}
                stroke={randomHSLColor(1)}
              />
            </a>
          </li>
        ))}
      </ColumnList>
      <Flex css={{ marginTop: "1rem" }}>
        {commitSHA && (
          <ExternalAnchor
            css={{
              fontSize: "0.8rem",
              textDecoration: "none",
            }}
            href={`https://github.com/nimatullo/nimatullo.com/commit/${commitSHA}`}
          >
            {commitSHA.slice(0, 7)}
          </ExternalAnchor>
        )}
      </Flex>
    </FooterWrapper>
  )
}
