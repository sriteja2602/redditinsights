import { useEffect, useContext, useDispatch } from 'react';
import {FaAward, FaEdit, FaBan} from 'react-icons/fa'
import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi'
import RedditContext from '../context/RedditContext';
import Loader from './layout/Loader';
function DisplayAnalytics() {

  const {postDetail, loading, posturl} = useContext(RedditContext)
  
  if(postDetail.length ==0){}

  else if(loading){
  
    return (
      <div className='mt-10'>
        <Loader size="8"/>
      </div>
    )
  } 
  
  else {
    const cleaned_data = postDetail[0].data.children[0].data
    const extractLink = posturl.substring(0, posturl.length - 44)
    console.log(extractLink);
    const embedLink = extractLink.substring(0, 18) + "media" + extractLink.substring(18, extractLink.length);
    console.log(embedLink);
  return (
    <>
      <h5 className='text-center mt-10 underline text-xl uppercase font-bold'>Post Analytics</h5>
      <div className="my-10 flex justify-center">

      <iframe id="reddit-embed" src={`${embedLink}?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=dark`} sandbox="allow-scripts allow-same-origin allow-popups" className="border-0" height="450" width="640" scrolling="no"></iframe>
      </div>
        {/* <p className='mt-10'>Post Author: {cleaned_data.author}</p> 
      
      <div className='flex gap-8 container mx-auto my-10 justify-content'>
        <div className='border p-5 bg-white shadow-lg'>
          <FaAward className="h-8 w-8"></FaAward>
          <span className="text-white bg-red-700 absolute rounded-full text-xs mt-0 -ml-3.5 py-0 px-1.5">
          Awards: {cleaned_data.all_awardings.length}
          </span>
        </div>
        <div className='border p-5 bg-white shadow-lg'>
          <HiOutlineThumbUp className="h-8 w-8"></HiOutlineThumbUp>
          <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-1.5 ml-2 py-0 px-1.5">
            {cleaned_data.ups}
          </span>
        </div>
        <div className='border p-5 bg-white shadow-lg'>
          <FaEdit className="h-8 w-8"></FaEdit>
          <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-1.5 ml-2 py-0 px-1.5">
            {cleaned_data.edited? "Yes" : "No"}
          </span>
        </div>
        <div className='border p-5 bg-white shadow-lg'>
          <HiOutlineThumbUp className="h-8 w-8"></HiOutlineThumbUp>
          <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-1.5 -ml-3.5 py-0 px-1.5">
            Created <br/>
            {cleaned_data.created_utc}
          </span>
        </div>

      </div>
      <div className='flex gap-8 container mx-auto my-10 justify-content'>
        <div className='border p-5 bg-white shadow-lg'>
          <FaBan className="h-8 w-8"></FaBan>
          <span className="text-white bg-red-700 absolute rounded-full text-xs mt-0  py-0 px-2.5">
          Banned On
          <br/>
          <span>{cleaned_data.banned_at_utc}</span>
          </span>
        </div>
        <div className='border p-5 bg-white shadow-lg'>
          <HiOutlineThumbDown className="h-8 w-8"></HiOutlineThumbDown>
          <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-1.5 ml-2 py-0 px-1.5">
          {cleaned_data.downs}
          </span>
        </div>
        <div className='border p-5 bg-white shadow-lg'>
          <FaEdit className="h-8 w-8"></FaEdit>
          <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-1.5 ml-2 py-0 px-1.5">
            {cleaned_data.edited? "Yes" : "No"}
          </span>
        </div>

      </div> */}

<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 ">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full border text-center">
          <thead className="border-b">
            <tr>
              <th scope="col" className="border-r text-sm font-medium text-gray-900 px-6 py-4">
                Attribute
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Post Title
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.title}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Post Author
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.author}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Likes
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.ups}
              </td>
            </tr>
            <tr className="border-b bg-red-100 border-red-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Dislikes
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.downs}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Total Awards
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.total_awards_received}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Hidden
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.hidden? "Yes": "No"}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Hide Score
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.hide_score? "Yes": "No"}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Created From Ads UI
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.is_created_from_ads_ui? "Yes": "No"}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Crosspostable
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.is_crosspostable? "Yes": "No"}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Original Content
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.is_original_content? "Yes": "No"}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Mod Note
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.mod_note}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Mod Reports
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.mod_reports.toString()}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Comments
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.num_comments}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Crossposts
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.num_crossposts}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Duplicates
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.num_duplicates}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Over 18
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.is_original_content? "Yes": "No"}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Spoiler
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.is_spoiler? "Yes": "No"}
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Stickied
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {cleaned_data.stickied? "Yes": "No"}
              </td>
            </tr>
            <tr className="border-b bg-red-100 border-red-200">
              <td className="text-sm border-r text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Danger
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </>
  );}
  
}

export default DisplayAnalytics;
