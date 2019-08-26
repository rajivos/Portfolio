const initState = {
    authError: null,

  };
  
  const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case "BUTTON_PRESSED":
                return {
                    ...state,
                    submitted: true 
                  };

      default:
        return state;
    }
  };
  
  export default contactReducer;