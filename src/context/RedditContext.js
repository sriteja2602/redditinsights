import { createContext, useReducer } from "react";
import RedditReducer from "./RedditReducer";

const RedditContext = createContext();

const RedditOauthUrl = process.env.REACT_APP_REDDIT_URL;
const RedditToken = process.env.REACT_APP_REDDIT_TOKEN;

export function RedditProvider({ children }) {

  const initialState = {
    posts: [],
    jokes:[],
    posturl: '',
    postDetail: [],
    jokeLoading: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(RedditReducer, initialState);

  const fetchBestOfPosts = async () => {
    dispatch({
      type: "SET_LOADING",
    });
    const response = await fetch(`${RedditOauthUrl}/r/pics/top`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${RedditToken}`,
      },
    });
    
    if(response.status !== 401){

      const data = await response.json();
      dispatch({
        type: "GET_POSTS",
        payload: data.data.children,
      });
      console.log(data.data.children[0]);
    } else {
      console.log(response.status);
    }
  };

  const fetchJokes = async () => {
    dispatch({
      type: "SET_JOKELOADING",
    });
    const response = await fetch(`${RedditOauthUrl}/r/jokes/rising?limit=5`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${RedditToken}`,
      },
    });
    const data = await response.json();

    if(response.status !== 401){
    dispatch({
      type: "GET_JOKE",
      payload: data.data.children,
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
    if(link!= ''){
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
        posts: state.posts,
        jokes: state.jokes,
        loading: state.loading,
        jokeLoading: state.jokeLoading,
        posturl: state.posturl,
        postDetail: state.postDetail,
        fetchBestOfPosts,
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
