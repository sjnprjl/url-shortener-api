import { saveURL } from "../utils/fetch-db.js";
import { v4 } from "uuid";
import urlShort from "../utils/url-short.js";
export const urlShortenerController = async (req, res, next) => {
  const { url, custom } = req.body;
  if (custom !== undefined && custom.length < 5) {
    return res
      .status(400)
      .send({ message: "custom short url's length cannot be less than 5 " });
  }
  try {
    const id = v4();
    const shortUrl = custom ? custom : urlShort(id);
    await saveURL(id, url, shortUrl);
    return res.status(200).send({ message: "Short url generated.", shortUrl });
  } catch (err) {
    const { errno } = err;
    if (errno === 1) return res.status(500).send({ message: "server fault" });
    if (errno === 19)
      return res.status(400).send({ message: `Similar url already exists.` });
    return res.status(400).send(err);
  }
};
