const initialState = {
  userInfo: { email: "", role: "" },
  point: {
    count: 0,
    status: false,
  },
  dataStatus: false,
  videoStatus: false,
  dailySpeciesStatus: {
    species1: false,
    species2: false,
    species3: false,
    species4: false,
  },
  quizStatus: false,
  joinStatus: false,
  campaignStatus: {
    campaign1: false,
    campaign2: false,
    campaign3: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [action.name]: action.value,
        },
      };
    case "POINT":
      return {
        ...state,
        point: {
          ...state.point,
          [action.name]: action.value,
        },
      };
    case "DATA":
      return {
        ...state,
        dataStatus: !state.dataStatus,
      };
    case "VIDEO":
      return {
        ...state,
        videoStatus: !state.videoStatus,
      };
    case "DAILYSPECIES":
      return {
        ...state,
        dailSpeciesStatus: !state.dailSpeciesStatus,
      };
    case "QUIZ":
      return {
        ...state,
        quizStatus: !state.quizStatus,
      };
    case "JOIN":
      return {
        ...state,
        joinStatus: action.status,
      };
    case "CAMPAIGN":
      return {
        ...state,
        campaignStatus: {
          ...state.campaignStatus,
          [action.name]: action.status,
        },
      };
  }
};

export { initialState, reducer };
