import React from "react";
import { getLinks } from "../services/firestore";

const Hoarder = () => {
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    getLinks()
      .then(data => setLinks(data))
      .catch(_ => {
        setLinks([
          {
            title: "Dummy website",
            url: "https://reminderse.com"
          }
        ])
      })
  };

  return (
    <ul>
      {links.map((link) => (
        <li className="hoarder-listitem">
          <a className="link" href={link.url}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Hoarder;
