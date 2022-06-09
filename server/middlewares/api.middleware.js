import isValidUrl from "../utils/url-validator.js";
import { getURL } from "../utils/fetch-db.js";
import { env } from "../configs/env.js";

export const validUrl = (req, res, next) => {
  const { url } = req.body;
  console.log('GOT URL', req.body);
  if (!isValidUrl(url)) {
    return res.status(401).send({ message: "The given url is not valid. " });
  }
  if (url === undefined)
    return res.status(400).send({ message: "payload is required" });
  return next();
};

export const validShortUrl = async (req, res, next) => {
  const { shortUrl } = req.body;
  if (!shortUrl)
    return res.status(400).send({ message: "Please provide payload" });
  try {
    const data = await getURL(shortUrl);
    if (data === undefined)
      return res.status(404).send({ message: env.MESSAGE_404 });

    req.redirectUrl = data.originalurl;
    return next();
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
