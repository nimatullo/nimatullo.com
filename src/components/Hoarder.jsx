import React from "react";

const Hoarder = () => {
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/get")
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);

  return (
    <ul>
      {links.map((link) => (
        <li>
          <a class="link" href={link.url}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Hoarder;
