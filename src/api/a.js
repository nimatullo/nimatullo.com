const { addLink } = require("../services/firestore");
const { parseHTML } = require("linkedom");
import fetch from "cross-fetch";

function isUrl(url) {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return regex.test(url);
}

async function getTitle(url) {
  return fetch(`https://api.allorigins.win/get?url=${url}`)
    .then((res) => res.text())
    .then((body) => {
      const html = parseHTML(body);
      const title = html.document.querySelector("title").textContent;
      if (title) {
        return title;
      } else {
        return "Cool little link";
      }
    })
    .catch((err) => console.log(err));
}

// URL Format: https://nimatullo.com/api/a?u=https://www.google.com
export default async function handler(req, res) {
  const url = req.query.u;
  const p = req.query.p;

  if (!p || p !== process.env.GATSBY_PASSWORD) {
    res.status(401).send("Unauthorized");
    return;
  }

  if (!url || !isUrl(url)) {
    res.status(400).send({
      message: "Invalid URL",
    });
  } else {
    const title = await getTitle(url);

    await addLink(url, title);

    res.status(200).send({
      message: `${url} added to the list`,
    });
  }
}
