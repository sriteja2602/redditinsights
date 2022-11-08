import { useContext } from "react";
import RedditContext from "../context/RedditContext";
import 'animate.css'
import { useEffect } from "react";

function SearchPost() {
  const { loading, handleSubmit, link, posturl, clearPostUrl } =
    useContext(RedditContext);

  return (
    <>
      <div className="grid xs:justify-items-stretch md:justify-items-center my-5 py-5">
        <form onSubmit={handleSubmit} className="mb-3 xl:w-96 sm:w-3/4">
          <label
            forhtml="exampleURL0"
            className="
            animate__animated animate__flipInX
            text-2xl font-bold form-label inline-block mt-12 mb-6 text-black"
          >
            Reddit URL
          </label>
          <input
            style={{ fontSize: "small" }}
            value={posturl}
            onChange={link}
            autoFocus
            type="search"
            className="
              animate__animated 
              animate__bounceInLeft
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleURL0"
            placeholder="Reddit URL"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={clearPostUrl}
              className="animate__animated animate__fadeInDown
               inline-block mt-10 px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Clear
            </button>

            {loading ? 
            <button
              style={{cursor: 'not-allowed'}}
              type="button"
              disabled
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block mt-10 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Loading
            </button>
            :
            <button
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="animate__animated animate__fadeInUp
            inline-block mt-10 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Submit
          </button>
            }
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchPost;
