import { createContext, useReducer } from "react";
import RedditReducer from "./RedditReducer";

const RedditContext = createContext();

export function RedditProvider({ children }) {
  const initialState = {
    jokes: [],
    posturl: "",
    postDetail: [],
    jokeLoading: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(RedditReducer, initialState);

  const fetchJokes = async () => {
    dispatch({
      type: "SET_JOKELOADING",
    });
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    const data = await response.json();

    if (response.status === 200) {
      dispatch({
        type: "GET_JOKE",
        payload: data,
      });
    } else {
      console.log(response.status);
    }
  };

  const link = (e) => {
    dispatch({
      type: "SET_LINK",
      payload: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const link = state.posturl;
    if (link !== "") {
      dispatch({
        type: "SET_LOADING",
      });
      let mainLink = link.substring(0, link.search("/?utm_source=share") - 2);
      const response = await fetch(`${mainLink}.json`);
      const data = await response.json();

      if (response.status !== 401) {
        dispatch({
          type: "GET_POSTANALYTICS",
          payload: data,
        });
      } else {
        console.log(response.status);
      }
    }
  };

  const clearPostUrl = () => {
    dispatch({
      type: "CLEAR_POSTURL",
    });
  }
  return (
    <RedditContext.Provider
      value={{
        jokes: state.jokes,
        loading: state.loading,
        jokeLoading: state.jokeLoading,
        posturl: state.posturl,
        postDetail: state.postDetail,
        fetchJokes,
        link,
        handleSubmit,
        clearPostUrl
      }}
    >
      {children}
    </RedditContext.Provider>
  );
}

export default RedditContext;
