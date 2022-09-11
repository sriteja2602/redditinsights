import { useEffect, useContext, useState } from "react";
import Loader from "./layout/Loader";
import RedditContext from "../context/RedditContext";
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";
import { FaAward } from "react-icons/fa";

export default function Posts(params) {
  
  const { posts, loading, fetchBestOfPosts } = useContext(RedditContext);

  useEffect(() => {
    const abortController = new AbortController();
    fetchBestOfPosts();

    return () => {
      abortController.abort()
    }
  }, []);

  if (!loading) {
    return (
      <div>
        <div className="mt-15 flex flex-wrap justify-between items-start">
          {posts.map((post, i) => (
            <div
              className="flex-1-0-1 rounded-lg shadow-lg bg-white max-w-sm mt-14"
              key={i}
            >
              <a
                target="_blank"
                href={"https://www.reddit.com" + post.data.permalink}
              >
                <img className="rounded-t-lg lazy-loading" src={post.data.url} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-lg font-medium mb-2">
                  {post.data.author}
                </h5>
                <p className="text-md text-gray-900 font-light mb-4">
                  {post.data.title}
                </p>
                <div className="flex flex-wrap justify-evenly">
                  <p className="text-center">
                    <FaAward className="h-8 w-8"></FaAward>
                    {post.data.all_awardings.length}
                  </p>
                  <div className="flex justify-end">
                    <p className="text-center">
                      <HiOutlineThumbUp className="h-8 w-8"></HiOutlineThumbUp>
                      {post.data.ups}
                    </p>
                    <p className="text-center">
                      <HiOutlineThumbDown className="h-8 w-8"></HiOutlineThumbDown>
                      {post.data.downs}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <Loader size="8"/>;
  }
}
