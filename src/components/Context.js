import React from "react";
import reducer from "./Reducer";

const api = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "",
  page: 0,
  nbPages: 0,
  hits: [],
};

// creating a context
const AppContext = React.createContext();

// creating a provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "GET_DATA",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // to remove the post
  const removePost = (id) => {
    dispatch({
      type: "REMOVE_POST",
      payload: id,
    });
  };

  // to search the post
  const searchPost = (value) => {
    dispatch({
      type: "SEARCH_POST",
      payload: value,
    });
  };

  // to go to previous Page
  const getPreviousPage = () => {
    dispatch({
      type: "PREVIOUS_PAGE",
    });
  };

  // to go to next Page
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  React.useEffect(() => {
    fetchData(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPreviousPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// creating own Custom Hooks
const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
