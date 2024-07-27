import type { ClientOptions, SiteflowConfig } from "./types";
import { setSiteflowConfig } from "./config";
import * as OrderRoutes from "./routes/order";
// Import other route files as needed

/**
 * A client for interacting with the Siteflow API.
 */
class SiteflowClient {
  private options: ClientOptions;

  /**
   * Creates an instance of SiteflowClient.
   *
   * @param config - The configuration settings for Siteflow.
   * @param options - Optional client options for the request.
   */
  constructor(config: SiteflowConfig, options: ClientOptions = {}) {
    this.options = options;
    setSiteflowConfig(config);
  }

  /**
   * Order-related API methods.
   */
  public order = {
    /**
     * Fetches all orders.
     *
     * @returns A promise that resolves with the list of all orders.
     */
    getAll: () => OrderRoutes.getAllOrders(this.options),

    /**
     * Fetches a specific order by its ID.
     *
     * @param id - The ID of the order to fetch.
     * @returns A promise that resolves with the order data.
     */
    get: (id: string) => OrderRoutes.getOrder(id, this.options),

    /**
     * Validates an order.
     *
     * @param order - The order data to validate.
     * @returns A promise that resolves with the validation result.
     */
    validate: (order: any) => OrderRoutes.validateOrder(order, this.options),

    /**
     * Creates a new order.
     *
     * @param order - The order data to create.
     * @returns A promise that resolves with the created order data.
     */
    create: (order: any) => OrderRoutes.createOrder(order, this.options),

    /**
     * Cancels a specific order.
     *
     * @param sourceAccountName - The name of the source account.
     * @param sourceOrderId - The ID of the source order.
     * @returns A promise that resolves with the result of the cancellation.
     */
    cancel: (sourceAccountName: string, sourceOrderId: string) =>
      OrderRoutes.cancelOrder(this.options, sourceAccountName, sourceOrderId),
  };

  // Add other route objects (account, job, etc.) here
}

export default SiteflowClient;
