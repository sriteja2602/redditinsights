import { useContext, useEffect } from "react";
import RedditContext from "../context/RedditContext";
import PostsLoader from "./layout/PostsLoader";

const BestOfPosts = () => {
  const { bestOf, posts, postsLoading } = useContext(RedditContext);
  useEffect(() => {
    bestOf();
  }, []);

  if (postsLoading) {
  
    return <PostsLoader/>
  
  } else if (posts.length !== 0) {
      
    let cleaned_data = posts.data.children;

      let muchClean = cleaned_data.filter((i) => {
        return i.data.url.search("gallery") === -1 && i.data.is_video !== true && i.data.is_meta !== "nsfw";
      }); 
      // filtered cleaned_data array from image url containing gallery in url since gallery url's cannot be rendered currently

      return muchClean.map((i) => (
        <div className="my-6 py-6" key={i.data.title}>
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <img
              className="rounded-t-lg"
              src={i.data.url}
              alt="A subreddit called pics image"
            />
            <div className="p-6">
              <a href={`https://reddit.com${i.data.permalink}`} target="_blank">
                <p className="font-semibold text-black text-md font-medium mb-2">
                  {i.data.title}
                </p>
              </a>
            </div>
          </div>
        </div>
      ));
    }
    else{
      
    }
  };

export default BestOfPosts;
