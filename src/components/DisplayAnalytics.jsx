import { useEffect, useContext, useDispatch } from "react";
import { FaAward, FaEdit, FaBan } from "react-icons/fa";
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";
import RedditContext from "../context/RedditContext";
import Loader from "./layout/Loader";

function DisplayAnalytics() {
  const { postDetail, loading, posturl } = useContext(RedditContext);

  if (postDetail.length === 0) {
  } else if (loading) {
    return (
      <div className="mt-10">
        <Loader size="8" />
      </div>
    );
  } else {
    console.log(postDetail);
    const cleaned_data = postDetail[0].data.children[0].data;
    const extractLink = posturl.substring(0, posturl.length - 44);
    const embedLink =
      extractLink.substring(0, 18) +
      "media" +
      extractLink.substring(18, extractLink.length);

    const clensedData = {
      Author: cleaned_data.author,
      Title: cleaned_data.title,
      Upvotes: cleaned_data.ups,
      Downvotes: cleaned_data.downs,
      Total_Awards: cleaned_data.total_awards_received,
      Crossposts: cleaned_data.num_crossposts,
      Duplicates: cleaned_data.num_duplicates,
      Reports: cleaned_data.num_reports,
      Mod_Reason_Title: cleaned_data.mod_reason_title,
      Mod_Reason_By: cleaned_data.mod_reason_by,
      Mod_Note: cleaned_data.mod_note,
      Thumbnail: cleaned_data.thumbnail,
      Subreddit_subscribers: cleaned_data.subreddit_subscribers,
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
          ></iframe>
        </div>

        <div className="flex flex-col py-2 inline-block min-w-full sm:px-6 lg:px-8 border text-center">
                  {Object.keys(clensedData).map(obj => {
                    
                    return (
                      <div key={obj} className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {obj}: {clensedData[obj]}
                      </div>
                    );
                  })}
        </div>
      </>
    );
  }
}

export default DisplayAnalytics;
