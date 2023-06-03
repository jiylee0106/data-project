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
  ErrorMessage: {
    type: "object",
    properties: {
      message: { type: "string" },
    },
  },
};

export { swaggerSchema };
