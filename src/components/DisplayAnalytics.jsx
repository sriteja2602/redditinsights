import { useEffect, useContext, useDispatch } from "react";
import { FaAward, FaEdit, FaBan } from "react-icons/fa";
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";
import RedditContext from "../context/RedditContext";
import Loader from "./layout/Loader";

function DisplayAnalytics() {
  const { postDetail, posturl, loading } = useContext(RedditContext);
  if (loading) {
    return <Loader/>;
  } 
  else if (Object.keys(postDetail).length !== 0) {
    const cleaned_data = postDetail[0].data.children[0].data;
    console.warn(posturl);
    console.log(posturl.search("comments"));
    let a = 0
    for(let i = 25; i<posturl.length;i++){
      
      if(posturl[i] === '/'){
        a++;
      }
      if(a === 4){
        a=i;
        break
      }
    }
    const extractLink = posturl.substring(0, a);
    console.log(extractLink);
    const embedLink =
    extractLink.substring(0, 18) +
    "media" +
    extractLink.substring(18, extractLink.length);
    
    console.log(embedLink);
    const clensedData = {
      Author: cleaned_data.author,
      Title: cleaned_data.title,
      Upvotes: cleaned_data.ups,
      Downvotes: cleaned_data.downs,
      Comments: cleaned_data.num_comments,
      "Total Awards": cleaned_data.total_awards_received,
      "Upvote Ratio": cleaned_data.upvote_ratio,
      Score: cleaned_data.score,
      Crossposts: cleaned_data.num_crossposts,
      Duplicates: cleaned_data.num_duplicates,
      Archived: cleaned_data.subreddit_type,
      Url: cleaned_data.url,
      "Subreddit subscribers": cleaned_data.subreddit_subscribers,
    };

    return (
      <>
        <h5 className="text-center mt-10 underline text-xl uppercase font-bold">
          Post Analytics
        </h5>
        <div className="my-10 flex justify-center">
          <iframe
            id="reddit-embed"
            src={`${embedLink}?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=dark`}
            sandbox="allow-scripts allow-same-origin allow-popups"
            className="border-0"
            height="450"
            width="640"
            scrolling="no"
            title={embedLink}
          ></iframe>
        </div>

        <div className="flex flex-col py-2 inline-block min-w-full lg:w-96 sm:px-6 border text-center" style={{marginRight: '6rem'}}>
          {Object.keys(clensedData).map((obj) => {
            return (
              <div
                key={obj}
                className="overflow-auto text-sm border-b text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
              >
                {obj}: {clensedData[obj]}
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
  }
}

export default DisplayAnalytics;
