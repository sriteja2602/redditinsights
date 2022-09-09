import { useEffect, useContext, useState } from "react";
import Loader from "./layout/Loader";
import RedditContext from "../context/RedditContext";
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";
import { FaAward } from "react-icons/fa";

export default function Posts(params) {
  
  const { posts, loading, fetchBestOfPosts } = useContext(RedditContext);
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBestOfPosts();
  }, []);

  // const fetchBestOfPosts = async () => {
  //   setLoading(true)
  //   const response = await fetch(`${RedditOauthUrl}/r/pics/top`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${RedditToken}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setPosts(data.data.children);
  //   console.log(data.data.children);
  //   setLoading(false);
  // };

  if (!loading) {
    return (
      <div>
        <div className="flex flex-wrap justify-between items-start">
          {posts.map((post, i) => (
            <div
              className="flex-1-0-1 rounded-lg shadow-lg bg-white max-w-sm mt-14"
              key={i}
            >
              <a
                target="_blank"
                href={"https://www.reddit.com" + post.data.permalink}
              >
                <img className="rounded-t-lg" src={post.data.url} alt="" />
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
                  {/* <button type="button" className="mb-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
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
    return <Loader />;
  }
}
