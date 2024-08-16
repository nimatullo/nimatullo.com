import { PageIntro } from "@components/scaffold/PageIntro"

const ResumePage: React.FC = (props) => {
  return (
    <PageIntro header="Resume">
      <div>
        <object
          css={{ width: "100%", height: "100vh" }}
          data="https://drive.google.com/file/d/1tm-0QbxPdLE9t1SnYamYFP9J2auHr7cM/preview"
          type="application/pdf"
        />
      </div>
    </PageIntro>
  )
}

export default ResumePage
