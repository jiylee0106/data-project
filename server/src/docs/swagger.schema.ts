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
};

export { swaggerSchema };
