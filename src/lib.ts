export type LogType = "log" | "info" | "warn" | "error" | "debug" | "table";

export type LogOptions<T> = {
  type: LogType;
  title?: string;
  message: T;
};

export type Config = {
  logging?: {
    enabled?: boolean | number;
    enableSqlQuery?: boolean | number;
  };
};

let globalConfig: Config = {};

/**
 * Initialize global configuration for logging settings
 *
 * @param {Config} config - Configuration object containing logging options
 * @param {Object} config.logging - Logging configuration settings
 * @param {boolean|number} [config.logging.enabled] - Enable/disable all logging (defaults to true)
 * @param {boolean|number} [config.logging.enableSqlQuery] - Enable/disable SQL query logging (defaults to true)
 * @returns {void} Nothing
 */
export function initConfig(config: Config) {
  globalConfig = config;
}
/**
 *
 * Check if logging is active
 * @export
 * @return {*}  {{
 *   isLogActive: boolean;
 *   isSqlQueryActive: boolean;
 * }}
 */
export function checkLogActive(): {
  isLogActive: boolean;
  isSqlQueryActive: boolean;
} {
  // Priority: manual override > ENV > default true
  return {
    isLogActive: Boolean(globalConfig.logging?.enabled ?? true),
    isSqlQueryActive: Boolean(globalConfig.logging?.enableSqlQuery ?? true),
  };
}
