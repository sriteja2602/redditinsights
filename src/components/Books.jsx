import { useEffect, useContext } from "react";
import RedditContext from "../context/RedditContext";
import Loader from "./layout/Loader";

function Books() {
  const { books, loading, fetchBestOfBooks } = useContext(RedditContext);

  useEffect(() => {
    fetchBestOfBooks();
  }, []);

  if (loading || books === undefined) {
    return <Loader size="11" />;
  } else {
    return (
      <>
      <div><h4 className="font-medium leading-tight text-2xl">NY TIMES BOOK BOOKS</h4></div>
          <div className="accordion  mt-15" id="accordionExample" >
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            
            {books.map((book, i) => (
            <div key={i} className="m-5 accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header" id={"header"+i}>
                  <button
                    className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#target"+i+books.length}
                    aria-expanded="true"
                    aria-controls={"target"+i+books.length}
                  >
                    {book.title}
                  </button>
                </h2>
                <div
                  id={"target"+i+books.length}
                  className="accordion-collapse collapse show"
                  aria-labelledby={"header"+i}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4 px-5">{book.description}</div>
                  <div className="accordion-body py-2 px-5">{book.author}</div>
                  <div className="opacity-75 accordion-body py-2 px-5"> <i>{book.publisher}</i></div>
                </div>
              </div>
          ))}
          </div>
        </div>
      </>
    );
  }
}

export default Books;
