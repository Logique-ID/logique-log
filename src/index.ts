import fs from "fs";
import { LogOptions, checkLogActive, initConfig } from "./lib";

/**
 * Create log with specified format
 *
 * @export
 * @template T - Data type for log message
 * @param {LogOptions<T>} options - Options for creating log
 * @param {LogType} options.type - Log type ("log", "info", "warn", "error", "debug", "table")
 * @param {string} [options.title] - Log title (optional)
 * @param {T} options.message - Message/data to be logged
 * @return {void} Returns nothing
 */
export function createLog<T>(options: LogOptions<T>): void {
  const { isLogActive } = checkLogActive();

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
 * @param {string} filename - Filename to write SQL query
 * @param {string} sql - SQL query to write
 * @return {void} Returns nothing
 */
export const writeSqlQuery = (filename: string, sql: string) => {
  const { isSqlQueryActive } = checkLogActive();
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
