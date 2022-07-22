const fs = require("fs");

export default async function handler(req, res) {
  // Read contents of links.txt

  const linksjson = fs.readFileSync("links.json", "utf8");
  const links = JSON.parse(linksjson);

  if (links.length === 0) {
    res.status(400).send([]);
  } else {
    res.status(200).send(links);
  }
}
