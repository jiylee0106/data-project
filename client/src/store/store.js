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
  dailyEventsLog: [],
  campaignLog: [],
  isLoggedIn: false,
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
        dataStatus: action.status,
      };
    case "VIDEO":
      return {
        ...state,
        videoStatus: action.status,
      };
    case "DAILYSPECIES":
      return {
        ...state,
        dailySpeciesStatus: {
          ...state.dailySpeciesStatus,
          [action.name]: action.status,
        },
      };
    case "QUIZ":
      return {
        ...state,
        quizStatus: action.status,
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
    case "DAILYLOGS":
      return {
        ...state,
        dailyEventsLog: action.value,
      };

    case "CAMPAIGNLOGS":
      return {
        ...state,
        campaignLog: action.value,
      };
    case "ISLOGGEDIN":
      return {
        ...state,
        isLoggedIn: action.value,
      };
  }
};

export { initialState, reducer };
