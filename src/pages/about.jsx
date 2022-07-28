import React from "react";
import Nav from "../components/Nav";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";
import PageIntro from "../components/PageIntro";

const About = () => {
  const [wydResponseTitle, setWydResponseTitle] = React.useState(
    "The unknown..."
  );
  const [wydResponseUrl, setWydResponseUrl] = React.useState(
    "https://nimatullo.com"
  );

  React.useEffect(() => {
    fetchWyd();
  }, []);

  const fetchWyd = async () => {
    fetch("https://p-wyd.herokuapp.com/activity")
      .then((res) => res.json())
      .then((data) => data.current)
      .then(current => {
        if (current.name && current.website) {
          setWydResponseTitle(`browsing ${current.name}`);
          setWydResponseUrl(current.website);
        } else {
          setWydResponseTitle("Sleep...😴")
        }
      })
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | About Me</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚶‍♂️</text></svg>"
        />
      </Helmet>
      <Nav />
      <div className="container">
        <PageIntro
          header="About"
          text="I am a computer science student from NYC attending Stony Brook University. My interests include backend development, software architecture, basketball and rap music."
        />
        <p>
          I am currently:{" "}
          <a className="link-fat" href={wydResponseUrl}>
            {wydResponseTitle}
          </a>
        </p>
        <small>
          <a
            id="mark-link"
            target="_blank"
            rel="noreferrer"
            href="https://markmoawad.com"
          >
            YOU KNOW THE VIBES
          </a>
        </small>
      </div>
      <SocialMediaNav />
    </>
  );
};

export default About;
