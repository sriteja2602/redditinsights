import { createContext, useReducer } from "react";
import RedditReducer from "./RedditReducer";

const RedditContext = createContext();

export function RedditProvider({ children }) {
  const initialState = {
    jokes: [],
    posts: [],
    posturl: "",
    postDetail: [],
    loading: false,
    jokeLoading: false,
    postsLoading: false,
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
      let mainLink = "";
      if (link.search("/?utm_source=share") !== -1) {
        mainLink = link.substring(0, link.search("/?utm_source=share") - 2);
      } else if (
        link.search("/comments/") !== -1 &&
        link[link.length - 1] === "/"
      ) {
        mainLink = link.substring(0, link.length - 2);
      }

      const response = await fetch(`${mainLink}.json`);
      const data = await response.json();

      if (response.status !== 401) {
        dispatch({
          type: "GET_POSTANALYTICS",
          payload: data,
        });
      } else {
        console.log(response);
      }
    }
  };

  const clearPostUrl = () => {
    dispatch({
      type: "CLEAR_POSTURL",
    });
  };

  const bestOf = async () => {
    let filters = ["top", "hot"];
    let subreddits =  "pics"

    let filteredType = filters[Math.floor(Math.random() * filters.length)];
    // let subredditType = subreddit[Math.floor(Math.random() * subreddit.length)];

    dispatch({
      type: "SET_POSTSLOADING",
    });
    
    const response = await fetch(
      `https://www.reddit.com/r/${subreddits}/${filteredType}.json`
    );
    
    let data = await response.json();
    
    if (response.status === 200) {
      
      dispatch({
        type: "BESTOF_POSTS",
        payload: data,
      });
    } else {
      console.log(response.status);
    }
  };

  return (
    <RedditContext.Provider
      value={{
        jokes: state.jokes,
        posts: state.posts,
        posturl: state.posturl,
        postDetail: state.postDetail,
        loading: state.loading,
        jokeLoading: state.jokeLoading,
        postsLoading: state.postsLoading,
        fetchJokes,
        link,
        handleSubmit,
        clearPostUrl,
        bestOf,
      }}
    >
      {children}
    </RedditContext.Provider>
  );
}

export default RedditContext;
