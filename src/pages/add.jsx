import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import "../styles/books.css";

const AddLink = () => {
  const [link, setLink] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    readClipboard();
  }, []);

  const readClipboard = () => {
    setTimeout(async () => {
      await navigator.clipboard.readText().then((text) => {
        if (isUrl(text)) {
          setLink(text);
        }
      });
    }, 3000);
  };

  const handleAddLink = (e) => {
    e.preventDefault();

    const params = new URLSearchParams({
      u: link,
      p: password,
    });

    fetch("/api/a?" + params)
      .then((res) => res.json())
      .then((data) => setResponse(data.message))
      .catch((err) => setError(err));
  };

  const isUrl = (url) => {
    const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    return regex.test(url);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Add Link</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>➕</text></svg>"
        />
      </Helmet>
      <Nav />
      <div className="container">
        <div className="add-link-container">
          <div className="add-link-content">
            <h1>Add Link to Hoarder</h1>
            <p>{response}</p>
            <p>{error}</p>
            <input
              type="url"
              placeholder="Add link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <input
              type="password"
              placeholder="Master password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAddLink}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLink;
