const fs = require("fs");
const DomParser = require("dom-parser");

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
    // Read links.json from project root
    let linksjson;
    try {
      linksjson = fs.readFileSync("links.json", "utf8");
    } catch (err) {
      linksjson = fs.writeFileSync("links.json", "");
    }

    let links;

    if (linksjson) {
      links = JSON.parse(linksjson);
    } else {
      links = [];
    }

    const title = await parseUrl(url);
    links.push({ url, title });

    fs.writeFileSync("links.json", JSON.stringify(links));

    res.status(200).send({
      message: `${url} added to the list`,
    });
  }
}
