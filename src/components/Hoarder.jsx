import React from "react";
import { getLinks } from "../services/firestore";

const Hoarder = () => {
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => setLinks(await getLinks());

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
