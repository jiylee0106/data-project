const swaggerSchema = {
  User: {
    type: "object",
    properties: {
      email: { type: "string" },
    },
  },
  Auth: {
    type: "object",
    properties: {
      email: { type: "string" },
      password: { type: "string" },
    },
  },
  Token: {
    type: "object",
    properties: {
      token: { type: "string" },
    },
  },
  Password: {
    type: "object",
    properties: {
      password: { type: "string" },
    },
  },
  SuccessMessage: {
    type: "object",
    properties: {
      message: { type: "string" },
    },
  },
  ErrorMessage: {
    type: "object",
    properties: {
      message: { type: "string" },
    },
  },
  Point: {
    type: "object",
    properties: {
      point: { type: "number" },
    },
  },
  PointsLog: {
    type: "object",
    properties: {
      id: { type: "number" },
      userId: { type: "number" },
      points: { type: "number" },
      action_type: { type: "string" },
      method: { type: "string" },
      event_date: { type: "string" },
    },
  },
  PutPointsLog: {
    type: "object",
    properties: {
      action_type: { type: "string" },
      method: { type: "string" },
    },
  },
};

export { swaggerSchema };
