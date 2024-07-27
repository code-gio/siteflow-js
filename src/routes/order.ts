import type { ClientOptions } from "../types";
import { HTTPMethod } from "../types/common";
import type { Order } from "../types/order";
import { createRequest } from "../utils/request";

/**
 * Fetches all orders.
 *
 * @param options - The client options for the request.
 * @returns A promise that resolves with the list of all orders.
 */
export const getAllOrders = async (options: ClientOptions) => {
  return createRequest(HTTPMethod.GET, "/api/order", null, options);
};

/**
 * Fetches a specific order by its ID.
 *
 * @param id - The ID of the order to fetch.
 * @param options - The client options for the request.
 * @returns A promise that resolves with the order data.
 */
export const getOrder = async (id: string, options: ClientOptions) => {
  return createRequest(HTTPMethod.GET, `/api/order/${id}`, null, options);
};

/**
 * Validates an order.
 *
 * @param order - The order data to validate.
 * @param options - The client options for the request.
 * @returns A promise that resolves with the validation result.
 */
export const validateOrder = async (order: any, options: ClientOptions) => {
  return createRequest(HTTPMethod.POST, "/api/order/validate", order, options);
};

/**
 * Creates a new order.
 *
 * @param order - The order data to create.
 * @param options - The client options for the request.
 * @returns A promise that resolves with the created order data.
 */
export const createOrder = async (order: Order, options: ClientOptions) => {
  return createRequest(HTTPMethod.POST, "/api/order", order, options);
};

/**
 * Cancels a specific order.
 *
 * @param options - The client options for the request.
 * @param sourceAccountName - The name of the source account.
 * @param sourceOrderId - The ID of the source order.
 * @returns A promise that resolves with the result of the cancellation.
 */
export const cancelOrder = async (
  options: ClientOptions,
  sourceAccountName: string,
  sourceOrderId: string
) => {
  return createRequest(
    HTTPMethod.PUT,
    `/api/order/${sourceAccountName}/${sourceOrderId}/cancel`,
    null,
    options
  );
};
