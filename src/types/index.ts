/**
 * Configuration options for a client.
 */
export interface ClientOptions {
  /**
   * The number of retries to attempt in case of failure.
   * @default 0
   */
  retries?: number;

  /**
   * The delay in milliseconds between retry attempts.
   * @default 0
   */
  retryDelay?: number;

  /**
   * A function to determine if a retry should be attempted based on the error.
   * @param error - The error object that was encountered.
   * @returns `true` if the request should be retried, otherwise `false`.
   */
  retryCondition?: (error: any) => boolean;

  /**
   * Indicates if the service user should be used.
   * @default false
   */
  serviceUser?: boolean;

  /**
   * The account ID associated with the client.
   */
  accountId?: string;

  /**
   * The routing rule to apply for the client.
   */
  routingRule?: string;
}

/**
 * Configuration settings for Siteflow.
 */
export interface SiteflowConfig {
  /**
   * The token used for authentication.
   */
  token: string;

  /**
   * The secret used for authentication.
   */
  secret: string;

  /**
   * The base URL for the Siteflow API.
   * @default 'https://api.siteflow.com'
   */
  baseUrl?: string;
}
