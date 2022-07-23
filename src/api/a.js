const { addLink } = require("../services/firestore");
const getTitleAtUrl = require("get-title-at-url");

function isUrl(url) {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return regex.test(url);
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
