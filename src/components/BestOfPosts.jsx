import { useContext, useEffect } from "react";
import RedditContext from "../context/RedditContext";
import PostsLoader from "./layout/PostsLoader";

const BestOfPosts = () => {
  const { bestOf, posts, postsLoading } = useContext(RedditContext);

  useEffect(() => {
    bestOf();
  }, []);

  if (postsLoading) {
    return <PostsLoader />;
  } else if (posts.length !== 0) {
    let cleaned_data = posts;

    let muchClean = cleaned_data.filter((i) => {
      return (
        i.data.url.search("gallery") === -1 &&
        i.data.is_video !== true &&
        i.data.thumbnail !== "nsfw" &&
        !i.data.over_18 &&
        i.data.link_flair_text !== "Mod Post"
      );

    });
    // filtered cleaned_data array from image url containing gallery in url since gallery url's cannot be rendered currently

    return muchClean.map((i) => (
      <div
        className="my-6 py-6 animate__animated animate__fadeInDown mx-auto justify-center"
        key={i.data.id}
      >
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img
            className="rounded-t-lg"
            src={i.data.url}
            alt="Image from a subreddit"
          />
          <div className="p-6">
            <a href={`https://reddit.com${i.data.permalink}`} target="_blank">
              <p className="font-semibold text-black text-md font-medium mb-2">
                {i.data.title}
              </p>
            </a>
            <div className="grid grid-cols-2 gap-2 px-3 py-1">
              <div>
                <p>Awards</p>
              </div>
              <div className="place-self-end">
                <p>Upvotes</p>
              </div>
              
              <div>
                <p>{i.data.all_awardings.length}</p>
              </div>
              <div className="place-self-end">
                <p>{i.data.ups}</p>
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <i className="opacity-50">─ {i.data.author}</i>
            </div>
          </div>
        </div>
      </div>
    ));
  } else {
  }
};

export default BestOfPosts;
