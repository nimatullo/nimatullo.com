const { addLink } = require("../services/firestore");
const getTitleAtUrl = require("get-title-at-url");

function isUrl(url) {
  const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  return regex.test(url);
}

// URL Format: https://nimatullo.com/api/a?u=https://www.google.com
export default async function handler(req, res) {
  const url = req.query.u;
  const p = req.query.p;

  if (!p || p !== process.env.GATSBY_PASSWORD) {
    res.status(401).json({
      message: "Invalid password",
    });
    return;
  }

  if (!url || !isUrl(url)) {
    res.status(400).json({
      message: "Invalid URL",
    });
  } else {
    getTitleAtUrl(url, async (title) => {
      await addLink(url, title);
      const response = {
        url,
        title,
      };
      res.status(200).json({
        message: `${JSON.stringify(response)} added to database`,
      });
    });
  }
}
