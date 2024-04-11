function reducer(state, action) {
  switch (action.type) {
    case "DATA_LOAD_SUCCESS": {
      const {
        data: { comments },
      } = action;
      const newState = {
        ...state,
        messages: comments,
      };
      return newState;
    }
    case "DATA_LOAD_ERROR": {
      const { error } = action;
      return {
        ...state,
        error,
      };
    }
    case "NEW_MESSAGE": {
      const {
        messages: { body, user },
      } = action;
      const newArrayMessager = [
        ...state.messages,
        {
          body,
          user,
          id: state.messages.length,
        },
      ];
      return {
        ...state,
        messages: newArrayMessager,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
