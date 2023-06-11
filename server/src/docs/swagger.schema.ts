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
  Collection: {
    type: "object",
    properties: {
      collection: {
        type: "array",
        items: {
          type: "number",
        },
      },
    },
  },
  News: {
    type: "object",
    properties: {
      id: { type: "number" },
      title: { type: "string" },
      description: { type: "string" },
      link: { type: "string" },
      image_link: { type: "string" },
      created_at: { type: "string" },
    },
  },
  Campaign: {
    type: "object",
    properties: {
      id: { type: "number" },
      type: { type: "string" },
      title: { type: "string" },
      description: { type: "string" },
      image_link: { type: "string" },
      created_at: { type: "string" },
    },
  },
  Participation: {
    type: "object",
    properties: {
      id: { type: "number" },
      title: { type: "string" },
      description: { type: "string" },
      image_link: { type: "string" },
      is_selected: { type: "number" },
      created_at: { type: "string" },
    },
  },
  Video: {
    type: "object",
    properties: {
      id: { type: "number" },
      video_id: { type: "string" },
      title: { type: "string" },
      description: { type: "string" },
      is_selected: { type: "number" },
      created_at: { type: "string" },
    },
  },
};

export { swaggerSchema };
