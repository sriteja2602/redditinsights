import { useContext, useEffect } from "react";
import RedditContext from "../context/RedditContext";

const BestOfPosts = () => {
  const { bestOf, posts } = useContext(RedditContext);
  useEffect(() => {
    bestOf();
  }, []);

  if (posts.length !== 0) {
    let cleaned_data = posts.data.children;
    console.warn(cleaned_data[13].data);
    
    return cleaned_data.map((i) => (
      <div className="flex justify-center my-6 py-6" key={i.data.title}>
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
};

export default BestOfPosts;
