import fs from "fs";
import { LogOptions, checkLogActive, initConfig } from "./lib";

const { isLogActive, isSqlQueryActive } = checkLogActive();

/**
 *
 * Create log
 * @export
 * @template T
 * @param {LogOptions<T>} options
 * @return {*}  {void}
 */
export function createLog<T>(options: LogOptions<T>): void {
  if (!isLogActive) return;

  const { type, title, message } = options;

  if (type === "table") {
    console.table(message);
    return;
  }

  const logMethod = console[type];
  title ? logMethod(title, message) : logMethod(message);
}
/**
 *
 * Write SQL query to file
 * @param {string} filename
 * @param {string} sql
 * @return {*}
 */
export const writeSqlQuery = (filename: string, sql: string) => {
  if (!isSqlQueryActive) return;
  fs.writeFile(filename, sql, (err: any) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.info(`Query successfully written to ${filename}`);
    }
  });
};

/** @type {void} */
export const createLogConfig = initConfig;
