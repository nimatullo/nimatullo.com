import path from "path";

const fs = require("fs");

export default async function handler(req, res) {
  // Read links.json from current directory that this file is in
  const linkspath = path.join(__dirname, "../links.json");
  console.log(linkspath);
  const linksjson = fs.readFileSync("links.json", "utf8");
  const links = JSON.parse(linksjson);

  if (links.length === 0) {
    res.status(400).send([]);
  } else {
    res.status(200).send(links);
  }
}
