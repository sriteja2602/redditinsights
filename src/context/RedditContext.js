import { createContext, useReducer } from "react";
import RedditReducer from "./RedditReducer";

const RedditContext = createContext();

const RedditOauthUrl = process.env.REACT_APP_REDDIT_URL;
const NYTIMES = process.env.NY_TIMES;
const API_KEY = process.env.NY_API_KEY;
const RedditToken = process.env.REACT_APP_REDDIT_TOKEN;

export function RedditProvider({ children }) {

  const initialState = {
    books: [],
    jokes:[],
    posturl: '',
    postDetail: [],
    jokeLoading: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(RedditReducer, initialState);
  const fetchBestOfBooks = async () => {
    dispatch({
      type: "SET_LOADING",
    });
    const response = await fetch(`${NYTIMES}/history.json?api-key=${API_KEY}&age-group=18`);
    
    if(response.status === 200){
      const data = await response.json();
      dispatch({
        type: "GET_BOOKS",
        payload: data.results
      });
    } else {
      console.log(response.status);
    }
  };

  const fetchJokes = async () => {
    dispatch({
      type: "SET_JOKELOADING",
    });
    const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await response.json();

    if(response.status === 200){
    dispatch({
      type: "GET_JOKE",
      payload: data,
    });
  }
    else{
      console.log(response.status);
    }
  };

  const link = (e) => {
    dispatch({
      type: "SET_LINK",
      payload: e.target.value
    })
    console.log(e.target.value.substring(22, e.target.value.length));
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('hi there');
    const link = state.posturl.substring(22, state.posturl.length)
    if(link !== ''){
    dispatch({
      type: "SET_LOADING",
    });
    const response = await fetch(`${RedditOauthUrl}${link}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${RedditToken}`,
      },
    });
    const data = await response.json();
  
    if(response.status !== 401){
      console.log(data);
      dispatch({
        type: 'GET_POSTANALYTICS',
        payload: data
      })
  }
    else{
      console.log(response.status);
    }
  }
  };

  return (
    <RedditContext.Provider
      value={{
        books: state.books,
        jokes: state.jokes,
        loading: state.loading,
        jokeLoading: state.jokeLoading,
        posturl: state.posturl,
        postDetail: state.postDetail,
        fetchBestOfBooks,
        fetchJokes,
        link,
        handleSubmit
      }}
    >
      {children}
    </RedditContext.Provider>
  );
}

export default RedditContext;
