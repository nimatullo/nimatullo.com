const DomParser = require("dom-parser");
const { addLink } = require("../services/firestore");

function isUrl(url) {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return regex.test(url);
}

async function parseUrl(url) {
  return fetch(`https://api.allorigins.win/get?url=${url}`)
    .then((res) => res.text())
    .then((body) => {
      const doc = new DomParser().parseFromString(body);
      return doc.getElementsByTagName("title")[0].textContent;
    });
}

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url || !isUrl(url)) {
    res.status(400).send({
      message: "Invalid URL",
    });
  } else {
    const title = await parseUrl(url);

    await addLink(url, title);

    res.status(200).send({
      message: `${url} added to the list`,
    });
  }
}
