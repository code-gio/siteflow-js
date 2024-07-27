/**
 * Represents a file with a specific path and content type.
 */
export interface Attachment {
  path: string;
  contentType: string;
  type: string;
  fetch: boolean;
}

/**
 * Represents a barcode configuration.
 */
export interface Barcode {
  placeBarcode: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  pages: string;
  horizontalAnchor: string;
  verticalAnchor: string;
  horizontalPadding: number;
  verticalPadding: number;
  background: string;
  foreground: string;
  showText: boolean;
  type: string;
  rotation: number;
  units: string;
  field: string;
}

/**
 * Represents a component within an item.
 */
export interface Component {
  attributes: Record<string, string>;
  barcode: string;
  barcodes: Barcode[];
  code: string;
  completed: string;
  fetch: boolean;
  extraData: Record<string, unknown>;
  fileId: string;
  fileImpositionId: string;
  batchImpositionId: string;
  alternateImpositionIds: string[];
  duplicate: number;
  errorCheck: boolean;
  legacyWorkQueue: boolean;
  infotech: boolean;
  infotechCopies: number;
  infotechPadding: number;
  infotechExternal: boolean;
  infotechImpose: boolean;
  infotechTemplateId: string;
  instructions: string;
  localFile: boolean;
  path: string;
  pages: number;
  paperId: string;
  preflight: boolean;
  preflightProfile: string;
  preflightProfileId: string;
  proof: boolean;
  route: Record<string, unknown>[];
  sourceComponentId: string;
  reprintCount: number;
  printQuantity: number;
  printQuantityFormula: string;
  status: string;
  ticketTemplate: string;
  type: string;
  colour: {
    side1: string;
    side2: string;
  };
  finish: {
    side1: string;
    side2: string;
  };
  height: number;
  simplex: boolean;
  weight: string;
  width: number;
  depth: number;
  workQueue: {
    workplan: string;
    initialState: Record<string, string>;
  };
  paper: string;
  nup: number;
  impositionId: string;
  preflightImageRes: number;
  autoflow: {
    flowId: string;
    planId: string;
  };
}

/**
 * Represents an item within an order.
 */
export interface Item {
  attributes: string[];
  barcode: string;
  batchId: string;
  batchNumber: string;
  batchBarcode: string;
  completed: string;
  description: string;
  dispatchAlert: string;
  extraData: Record<string, unknown>;
  binding: string;
  folding: string;
  orderItemId: string;
  productId: string;
  reprintCount: number;
  quantity: number;
  printQuantity: number;
  shipmentIndex: number;
  sku: string;
  sourceItemId: string;
  totalPages: number;
  status: string;
  productDescription: string;
  unitWeight: number;
  unitCost: number;
  unitPrice: number;
  scanned: number;
  printQuantityFormula: string;
  components: Component[];
}

/**
 * Represents a stock item within an order.
 */
export interface StockItem {
  code: string;
  name: string;
  quantity: number;
  barcode: string;
  stockId: string;
  scanned: number;
  shipmentIndex: number;
  unitPrice: number;
  weight: number;
  sourceItemId: string;
  mintsoftSKU: string;
}

/**
 * Represents the cost information.
 */
export interface Cost {
  value: number;
  currency: string;
}

/**
 * Represents the carrier information.
 */
export interface Carrier {
  code: string;
  service: string;
  alias: string;
  serviceId: string;
}

/**
 * Represents the return address information.
 */
export interface Address {
  name: string;
  companyName: string;
  address1: string;
  address2: string;
  address3: string;
  town: string;
  postcode: string;
  state: string;
  isoCountry: string;
  email: string;
  phone: string;
}

/**
 * Represents a package within a shipment.
 */
export interface Package {
  id: string;
  packageId: string;
  name: string;
  description: string;
  index: number;
  volume: number;
  items: {
    barcode: string;
    description: string;
    count: number;
    itemId: string;
    sourceItemId: string;
    value: number;
    cost: number;
    type: string;
    weight: number;
  }[];
  image: string;
  weight: number;
  width: number;
  shipmentIndex: number;
  height: number;
  depth: number;
  totalWeight: number;
  totalCost: number;
  totalValue: number;
  weightUnit: string;
  currency: string;
  dimensionUnit: string;
  trackingNumber: string;
  trackingUrl: string;
  barcode: string;
  SSCCbarcode: string;
  labels: Record<string, string>[];
  extra: Record<string, string>;
}

/**
 * Represents a shipment within an order.
 */
export interface Shipment {
  accountId: string;
  attachments: Attachment[];
  boxId: string;
  boxNumber: number;
  boxStatus: string;
  cancelledDate: string;
  canShipEarly: boolean;
  carrier: Carrier;
  created: string;
  componentIds: string[];
  commercialInvoiceUrl: string;
  cost: Cost;
  dispatchAlert: string;
  items: Item[];
  itemIds: string[];
  jobIds: string[];
  labelName: string;
  labelNotRequired: boolean;
  orderId: string;
  orderShipmentId: string;
  returnAddress: Address;
  shipByDate: string;
  slaDays: number;
  shipmentIndex: number;
  shippedDate: string;
  shipTo: Address;
  singleItem: boolean;
  trackingRequired: boolean;
  sourceOrderId: string;
  sourceAccountId: string;
  sourceShipmentId: string;
  status: string;
  stockItems: StockItem[];
  trackingNumber: string;
  trackingUrl: string;
  packages: Package[];
  wallId: string;
  shippingListTemplateId: string;
  scannedQuantity: number;
  expectedQuantity: number;
  printJobs: string[];
  agentJobs: string[];
  manuallyPacked: boolean;
  carrierFields: Record<string, string>;
  clientId: string;
  client: Record<string, string>;
  order: Record<string, string>;
  pspBranding: boolean;
  wall: Record<string, string>;
  partial: boolean;
}

/**
 * Represents the data of an order.
 */
export interface OrderData {
  attributes: string[];
  tags: string[];
  colour: string;
  clientId: string;
  printType: string;
  sourceOrderId: string;
  status: string;
  cancelledDate: string;
  completed: string;
  slaTimestamp: string;
  error: Record<string, string>;
  date: string;
  email: string;
  instructions: string;
  misCode: string;
  amount: number;
  reprint: boolean;
  reprintReason: string;
  reprintCount: number;
  currency: string;
  shippingListTemplateId: string;
  customerName: string;
  purchaseOrderNumber: string;
  tax: number;
  consolidatedInvoice: boolean;
  extraData: Record<string, string>;
  items: Item[];
  stockItems: StockItem[];
  shipments: Shipment[];
  additionalInformation: string;
  mintsoftOrderId: string;
  messages: {
    timestamp: string;
    text: string;
    userId: string;
    userName: string;
  }[];
}

/**
 * Represents an order.
 */
export interface Order {
  source: {
    name: string;
    id: string;
  };
  destination: {
    name: string;
    id: string;
  };
  files: string[];
  logs: {
    AnyValue: string;
  }[];
  api: string;
  orderData: OrderData;
}
