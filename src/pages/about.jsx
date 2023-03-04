import React from "react";
import Nav from "../components/Nav";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";
import PageIntro from "../components/PageIntro";
import LoadingComponent from "../components/LoadingText";

const About = () => {
  const [wydResponseTitle, setWydResponseTitle] = React.useState();
  const [wydResponseUrl, setWydResponseUrl] = React.useState();

  React.useEffect(() => {
    fetchWyd();
  }, []);

  const fetchWyd = async () => {
    const wydApiUrl = "https://wyd.nimatullo.com/stream";
    const eventSource = new EventSource(wydApiUrl);
    eventSource.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setWydResponseTitle(data.name);
      setWydResponseUrl(data.website);
    });

    setTimeout(() => {
      console.log("Stream closed!");
      eventSource.close();
    }, 30000); // Close connection after 30 seconds. Sorry, server time is expensive 😖
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚶‍♂️</text></svg>"
        />
      </Helmet>
      <Nav />
      <div className="container">
        <PageIntro
          header="About"
          text="I am a Computer Science graduate of Stony Brook University. My interests include backend development, software architecture, basketball and rap music. I like nature, Timurid art, red, slow days, sun, books, clackity
          keyboards, games, chatter, beach, sunset, travel, culture, tech, teamwork, blizzards, videos of men building log cabins in the woods"
        />
        <p></p>
        {wydResponseTitle?.length > 0 ? (
          <p>
            I am currently on{" "}
            <a className="link-fat" href={wydResponseUrl}>
              {wydResponseTitle}
            </a>
            .
          </p>
        ) : (
          <LoadingComponent />
        )}
      </div>
      <SocialMediaNav />
    </>
  );
};

export default About;
