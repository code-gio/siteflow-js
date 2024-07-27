import type { ClientOptions } from "../types";
import { HTTPMethod } from "../types/common";
import { baseUrl, token, secret } from "../config";
import crypto from "crypto";

/**
 * Creates headers for an HTTP request.
 *
 * @param method - The HTTP method (GET, POST, etc.).
 * @param path - The resource path for the request.
 * @param options - The client options for the request.
 * @returns An object containing the headers for the request.
 */
const createHeaders = (
  method: HTTPMethod,
  path: string,
  options: ClientOptions
) => {
  const timestamp = new Date().toISOString();
  const toSign = method.toUpperCase() + " " + path + " " + timestamp;
  const hash = crypto.createHmac("SHA256", secret);
  hash.update(toSign);
  const sig = hash.digest("hex");
  const headers: any = {
    "x-oneflow-authorization": token + ":" + sig,
    "x-oneflow-date": timestamp,
    "x-oneflow-algorithm": "SHA256",
    "content-type": "application/json",
    "accept-encoding": "null",
  };
  if (options.serviceUser && options.accountId) {
    headers["x-oneflow-account"] = options.accountId;
  }
  if (options.routingRule) {
    headers["x-oneflow-routing-rule"] = options.routingRule;
  }
  return headers;
};

/**
 * Delays execution for a specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to delay.
 * @returns A promise that resolves after the specified delay.
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Creates and sends an HTTP request with retry logic.
 *
 * @param method - The HTTP method (GET, POST, etc.).
 * @param resourcePath - The resource path for the request.
 * @param data - The data to be sent in the body of the request.
 * @param options - The client options for the request.
 * @returns A promise that resolves with the response data.
 * @throws An error if the request fails after the specified number of retries.
 */
export const createRequest = async (
  method: HTTPMethod,
  resourcePath: string,
  data: any,
  options: ClientOptions
) => {
  const retries = options.retries || 0;
  const retryDelay = options.retryDelay || 1000;
  const retryCondition = options.retryCondition || (() => true);

  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const url = `${baseUrl}${resourcePath}`;
      const headers = createHeaders(method, resourcePath, options);
      const fetchOptions: RequestInit = {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
      };
      const response = await fetch(url, fetchOptions);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return await response.json();
    } catch (err: any) {
      lastError = err;
      if (attempt < retries && retryCondition(err)) {
        await delay(retryDelay);
      } else {
        break;
      }
    }
  }

  if (
    lastError.response &&
    lastError.response.status === 400 &&
    lastError.response.data
  ) {
    if (lastError.response.data.error) throw lastError.response.data.error;
  }
  throw lastError;
};
