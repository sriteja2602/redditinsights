import { createContext, useReducer } from "react";
import RedditReducer from "./RedditReducer";

const RedditContext = createContext();

const RedditOauthUrl = process.env.REACT_APP_REDDIT_URL;
const RedditToken = process.env.REACT_APP_REDDIT_TOKEN;

export function RedditProvider({ children }) {
  // console.log(`${RedditOauthUrl}/r/pics/random`);
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);

  const initialState = {
    posts: [],
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
    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data.data.children,
    });
    console.log(data.data.children[0]);
  };

  const fetchJokes = async () => {
    dispatch({
      type: "SET_LOADING",
    });
    // setLoading(true)
    const response = await fetch(`${RedditOauthUrl}/r/jokes/top?limit=1`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${RedditToken}`,
      },
    });
    const data = await response.json();
    // setPosts(data.data.children);
    dispatch({
      type: "GET_JOKE",
      payload: data.data.children,
    });

    console.log(data.data.children);
  };

  return (
    <RedditContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        fetchBestOfPosts,
        fetchJokes,
      }}
    >
      {children}
    </RedditContext.Provider>
  );
}

export default RedditContext;
