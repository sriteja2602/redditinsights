import { useContext, useEffect } from "react";
import RedditContext from "../context/RedditContext";
import Loader from "./layout/Loader";

function Jokes() {

    const {posts, loading, fetchJokes} = useContext(RedditContext)
    
    useEffect(() => {
        fetchJokes();
      }, []);


    if(loading){
        return ( 
            <Loader/>
        );
    } else {
        return (
        <span className="text-xs">
        {posts.map((post,i) => (
            <span key={i}>{post.data.title}</span>
        ))}
        </span>
        )
    }
}

export default Jokes;