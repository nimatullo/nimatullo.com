const { addLink } = require("../services/firestore");
const { parseHTML } = require("linkedom");
const fetch = require("node-fetch");

function isUrl(url) {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return regex.test(url);
}

async function getTitle(url) {
  return fetch(`https://api.allorigins.win/get?url=${url}`)
    .then((res) => res.text())
    .then((body) => {
      const html = parseHTML(body);
      console.log("parseHTML result", html);
      const title = html.querySelector("title");
      console.log("Query selector result", title);

      if (title) {
        return title.innerText;
      } else {
        return "Cool little title";
      }
    })
    .catch((err) => "Cool little title");
}

// URL Format: https://nimatullo.com/api/a?u=https://www.google.com
export default async function handler(req, res) {
  const url = req.query.u;
  const p = req.query.p;

  if (!p || p !== process.env.GATSBY_PASSWORD) {
    res.status(401).send("Unauthorized");
    return;
  }

  console.log("URL", url);

  if (!url || !isUrl(url)) {
    res.status(400).json({
      message: "Invalid URL",
    });
  } else {
    const title = await getTitle(url);

    await addLink(url, title);

    res.status(200).json({
      message: `${url} added to the list`,
    });
  }
}
