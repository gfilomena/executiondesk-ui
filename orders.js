const instruments = require("./src/app/instruments.json");
const casual = require("casual");

const workflowStatus = casual.define("workflowStatus", () => {
  const workflowStati = [
    "OPEN-ORDER",
    "PENDING_PLACEMENT",
    "PLACEMENT_PRELIM._ACCEPTED",
    "PLACED",
    "PENDING_CANCELLATION",
    "EXPIRED",
    "CANCELLATION_PRELIM._ACCEPTED",
    "PENDING_MODIFICATION",
    "MODIFICATION_PRELIM._ACCEPTED",
    "PARTIALLY_FILLED",
    "FILLED",
    "RECTIFIED",
    "BOOKED",
    "DISCARDED",
    "REVERSED",
    "READY_FOR_POOLING",
    "POOL_MEMBER",
    "OPEN_POOL_ORDER",
    "REJECTED",
  ];

  return workflowStati[Math.floor(Math.random() * 19)];
});

const orderType = casual.define("orderType", () => {
  const orderTypes = ["BUY", "SELL"];
  const orderTypeIndex = Math.random() * 10 > 5 ? 1 : 0;

  return orderTypes[orderTypeIndex];
});

const instrument = casual.define("instrument", () => {
  return instruments.payload[Math.floor(Math.random() * 199)];
});

const executionType = casual.define("executionType", () => {
  const executionTypes = ["At Market", "Stop Limit", "Stop Market", "Limited"];
  return executionTypes[Math.floor(Math.random() * 3)];
});

const validityConstraint = casual.define("validityConstraint", () => {
  const validityConstraints = ["GTD", "GTC", "GFD"];
  return validityConstraints[Math.floor(Math.random() * 2)];
});

module.exports = () => {
  const data = { orders: [] };
  // Create 1000 users
  for (let i = 0; i < 100; i++) {
    data.orders.push({
      absOrderId: i,
      workflowStatus: {
        name: casual.workflowStatus,
      },
      dateCreated: casual.date((format = "YYYY-MM-DD")),
      responsible: {
        name: casual.name,
      },
      orderType: {
        name: casual.orderType,
      },
      originalQuantity: {
        formatted: casual.double((from = 10), (to = 1000)).toFixed(2),
      },
      instrument: casual.instrument,
      executionType: {
        name: casual.executionType,
      },
      validityConstraint: {
        name: casual.validityConstraint,
      },
      tradeCurrency: {
        keys: {
          asset_iso: casual.currency_code,
        },
      },
      market: {
        name: casual.username,
      },
      position: {
        historicPrice: {
          formatted:
            casual.integer((from = 10), (to = 1000)) +
            " " +
            casual.currency_code,
        },
      },
    });
  }
  return data;
};
