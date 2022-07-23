const { addLink } = require("../services/firestore");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function isUrl(url) {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return regex.test(url);
}

async function getTitle(url) {
  return fetch(`https://api.allorigins.win/get?url=${url}`)
    .then((res) => res.text())
    .then((body) => {
      const dom = new JSDOM(body);
      const title = dom.window.document.querySelector("title").textContent;
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
