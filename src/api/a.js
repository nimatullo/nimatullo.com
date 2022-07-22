const fs = require("fs");
const { JSDOM } = require("jsdom");

function isUrl(url) {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return regex.test(url);
}

async function parseUrl(url) {
  return fetch(`https://api.allorigins.win/get?url=${url}`)
    .then((res) => res.text())
    .then((body) => {
      const dom = new JSDOM(body);
      const document = dom.window.document;
      const title = document.querySelector("title").textContent;
      return title;
    });
}

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url || !isUrl(url)) {
    res.status(400).send({
      message: "Invalid URL",
    });
  } else {
    const linksjson = fs.readFileSync("links.json", "utf8");
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
