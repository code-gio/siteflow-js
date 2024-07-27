<body>
  <h1>Siteflow HP API Client</h1>

  <p>A TypeScript library for interacting with the Siteflow HP API.</p>

  <h2>Installation</h2>

  <pre><code>npm install siteflow-hp-client</code></pre>

  <h2>Usage</h2>

  <h3>Initializing the client</h3>

  <pre><code class="language-javascript">
import SiteflowClient from 'siteflow-hp-client';

const config = {
  token: 'your-api-token',
  secret: 'your-api-secret',
  baseUrl: 'https://api.siteflow.com' // Optional, defaults to production URL
};

const options = {
  retries: 3,
  retryDelay: 1000,
  retryCondition: (error) => error.response && error.response.status >= 500,
  serviceUser: true,
  accountId: 'your-account-id',
  routingRule: 'custom-routing-rule'
};

const client = new SiteflowClient(config, options);
  </code></pre>

  <h3>Making API calls</h3>

  <h4>Orders</h4>

  <pre><code class="language-javascript">
// Get all orders
const orders = await client.order.getAll();

// Get a specific order
const order = await client.order.get('order-id');

// Create a new order
const newOrder = {
  // Order details
};
const createdOrder = await client.order.create(newOrder);

// Validate an order
const validationResult = await client.order.validate(newOrder);

// Cancel an order
await client.order.cancel('source-account-name', 'source-order-id');
  </code></pre>

  <h2>API Reference</h2>

  <h3>SiteflowClient</h3>

  <p>The main client class for interacting with the Siteflow HP API.</p>

  <h4>Constructor</h4>

  <pre><code class="language-javascript">
constructor(config: SiteflowConfig, options?: ClientOptions)
  </code></pre>

  <p>Parameters:</p>
  <ul>
    <li><code>config</code>: Configuration object containing API credentials
      <ul>
        <li><code>token</code>: Your API token</li>
        <li><code>secret</code>: Your API secret</li>
        <li><code>baseUrl</code>: (Optional) API base URL</li>
      </ul>
    </li>
    <li><code>options</code>: (Optional) Client options
      <ul>
        <li><code>retries</code>: Number of retry attempts for failed requests</li>
        <li><code>retryDelay</code>: Delay between retry attempts (in milliseconds)</li>
        <li><code>retryCondition</code>: Function to determine if a request should be retried</li>
        <li><code>serviceUser</code>: Boolean indicating if the client is a service user</li>
        <li><code>accountId</code>: Account ID for the request</li>
        <li><code>routingRule</code>: Custom routing rule for the request</li>
      </ul>
    </li>
  </ul>

  <h3>Order Methods</h3>

  <ul>
    <li><code>getAll()</code>: Retrieve all orders</li>
    <li><code>get(id: string)</code>: Retrieve a specific order by ID</li>
    <li><code>create(order: Order)</code>: Create a new order</li>
    <li><code>validate(order: Order)</code>: Validate an order</li>
    <li><code>cancel(sourceAccountName: string, sourceOrderId: string)</code>: Cancel an order</li>
  </ul>

  <h2>Error Handling</h2>

  <p>The library uses a custom error handling mechanism. Errors thrown by the API will be wrapped in a <code>SiteflowError</code> class, which includes additional information about the request and response.</p>

  <h2>Contributing</h2>

  <p>Contributions are welcome! Please feel free to submit a Pull Request.</p>

  <h2>License</h2>

  <p>This project is licensed under the MIT License.</p>
</body>
