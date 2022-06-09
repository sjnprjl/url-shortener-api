import { dbGet, dbRun } from "../configs/db.js";

export const getURL = async (shortURL) => {
  const original = await dbGet(
    "SELECT * FROM db_url WHERE shorturl = ?",
    shortURL
  );
  return original;
};

export const saveURL = async (id, originalURL, shortenURL) => {
  return await dbRun(
    "INSERT INTO db_url (id, originalurl, shorturl) VALUES (?, ?, ?);",
    id,
    originalURL,
    shortenURL
  );
};
