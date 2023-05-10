const reducer = (state, action) => {
  // setting loading text while fetching the data
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }

  // fetching the data
  if (action.type === "GET_DATA") {
    return {
      ...state,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
      isLoading: false,
    };
  }

  // deleting the post
  if (action.type === "REMOVE_POST") {
    return {
      ...state,
      hits: state.hits.filter(
        (currElem) => currElem.objectID !== action.payload
      ),
    };
  }

  // searching for the post
  if (action.type === "SEARCH_POST") {
    return {
      ...state,
      query: action.payload,
    };
  }

  // loading the previous page
  if (action.type === "PREVIOUS_PAGE") {
    let pageNum = state.page;
    if (pageNum <= 0) {
      pageNum = 0;
    } else {
      pageNum = pageNum - 1;
    }
    return {
      ...state,
      page: pageNum,
    };
  }

  // loading the next page
  if (action.type === "NEXT_PAGE") {
    let pageNum = state.page;
    if (pageNum + 1 >= state.nbPages) {
      pageNum = 0;
    } else {
      pageNum = pageNum + 1;
    }
    return {
      ...state,
      page: pageNum,
    };
  }

  // have to return something at last
  return state;
};

export default reducer;
