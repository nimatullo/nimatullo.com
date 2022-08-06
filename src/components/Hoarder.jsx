import React from "react";
import { getLinks } from "../services/firestore";
import Loader from "./Loader";

const Hoarder = () => {
  const [links, setLinks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    setLoading(true);
    getLinks()
      .then((data) => setLinks(data))
      .catch((_) => {
        setLinks([
          {
            title: "Dummy website",
            url: "https://reminderse.com",
          },
        ]);
      })
      .finally(() => setLoading(false));
  };

  return loading ? (
    <Loader />
  ) : (
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
