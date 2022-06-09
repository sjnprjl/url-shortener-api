import sqlite3 from "sqlite3";
import util from "util";
const { promisify } = util;

const db = new sqlite3.Database("data.sqlite3");
export const dbGet = promisify(db.get.bind(db));
export const dbRun = promisify(db.run.bind(db));

export const createTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS db_url (
        id VARCHAR(255) NOT NULL UNIQUE,
        shorturl VARCHAR(50) NOT NULL UNIQUE,
        originalurl VARCHAR(100) NOT NULL
    );
    `;
    dbRun(query);
};
