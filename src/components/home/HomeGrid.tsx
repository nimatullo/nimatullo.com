import { useCursorHandlers, useMobile } from "@app/hooks"
import { homePageRoutes } from "@app/routes"
import { Grid, TextCard } from "@components/scaffold"
import styled from "@emotion/styled"
import { navigate } from "gatsby"

interface HomeGridProps {
  onTitleHover: (h: string | null) => void
}

const GlassTextCard = styled(TextCard)`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 4px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 40px;
  color: white;
  text-shadow: 0 0 2px #383838;
  transition: ease 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  font-size: 1.2rem;
  h4 {
    text-transform: uppercase;
  }
  p {
    font-size: smaller;
  }
  &:hover {
    backdrop-filter: brightness(0.7);
    cursor: pointer;
  }
`

export const HomeGrid = (props: HomeGridProps) => {
  const { onTitleHover } = props

  const mouseHandlers = useCursorHandlers()
  const { isMobile } = useMobile()

  const handleMouseEnter = (title: string) => {
    onTitleHover(title)
    mouseHandlers.onMouseEnter()
  }

  const handleMouseLeave = () => {
    onTitleHover(null)
    mouseHandlers.onMouseLeave()
  }

  return (
    <Grid>
      {homePageRoutes.map((r) => (
        <GlassTextCard
          onMouseEnter={() => handleMouseEnter(r.title)}
          onMouseLeave={handleMouseLeave}
          css={{ height: isMobile ? 150 : 200 }}
          key={r.title}
          onClick={() => navigate(r.link)}
          {...r}
        />
      ))}
    </Grid>
  )
}
