import type { SiteflowConfig } from "./types";

let baseUrl = "https://pro-api.oneflowcloud.com";
let token = "";
let secret = "";

/**
 * Sets the configuration for Siteflow.
 *
 * @param config - The configuration settings for Siteflow.
 * @param config.token - The token used for authentication.
 * @param config.secret - The secret used for authentication.
 * @param config.baseUrl - The base URL for the Siteflow API (optional).
 */
export function setSiteflowConfig(config: SiteflowConfig) {
  token = config.token;
  secret = config.secret;
  if (config.baseUrl) {
    baseUrl = config.baseUrl;
  }
}

export { baseUrl, token, secret };
