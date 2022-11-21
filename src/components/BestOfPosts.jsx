import { useContext, useEffect } from "react";
import RedditContext from "../context/RedditContext";
import PostsLoader from "./layout/PostsLoader";
import './BestOf.css'

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
        i.data.thumbnail_width !== "null" &&  // i think it removes text only posts
        !i.data.over_18 &&
        i.data.link_flair_text !== "Mod Post" &&
        i.data.secure_media === null &&
        Object.keys(i.data).indexOf("crosspost_parent_list") === -1
      );
    });
    // filtered cleaned_data array from image url containing gallery in url
    // since gallery url's cannot be rendered currently

    return muchClean.map((i) => (
      <div
        className="my-6 py-6 animate__animated animate__fadeInDown mx-auto justify-center"
        key={i.data.id}
      >
        <div className="rounded-lg shadow-lg bg-white max-w-sm zoom">
          <img
            className="rounded-t-lg"
            src={i.data.url}
            alt="Image from a subreddit"
          />
          <div className="p-6 bottom-card">
            <a href={`https://reddit.com${i.data.permalink}`} target="_blank">
              <p className="font-bold text-black text-md font-medium mb-2 text-center title">
                {i.data.title}
              </p>
            </a>
            <div className="grid grid-cols-2 gap-2 px-2 py-3">
              <div className="place-self-center">
                <p>Awards</p>
              </div>
              <div className="place-self-center">
                <p>Upvotes</p>
              </div>
              <div className="place-self-center">
                <p>{i.data.all_awardings.length}</p>
              </div>
              <div className="place-self-center">
                <p>{i.data.ups}</p>
              </div>
            </div>
            <div className="pt-4 flex justify-end">
            <a href={`https://reddit.com/user/${i.data.author}`} target="_blank">
              <i className="opacity-50">─ {i.data.author}</i>
            </a>
            </div>
          </div>
        </div>
      </div>
    ));
  } else {
  }
};

export default BestOfPosts;
