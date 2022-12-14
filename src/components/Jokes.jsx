import { useContext, useEffect } from "react";
import RedditContext from "../context/RedditContext";
import Loader from "./layout/Loader";

function Jokes() {
  const { jokes, jokeLoading, fetchJokes } = useContext(RedditContext);

  useEffect(() => {
    fetchJokes();
  }, []);

  if (jokeLoading || jokes.length === 0) {
    return <h1>Loading...</h1>;
  } else {

      const dropit = () => {
      const dropdownList = document.querySelector("#answer");
      dropdownList.classList.toggle("hidden");
      }
        return (
            <div className="text-sm">
              <p
                type="button"
                className="animate__animated animate__fade font-bold text-white-500"
                onClick={dropit}
                id="dropdown"
              >
                {jokes.setup}
              </p>
              <div id="answer" className="animate__animated animate__fadeInDown text-white-500 w-auto pt-2 hidden">
                - <i> {jokes.punchline}</i>
              </div>
            </div>
        )
        }
}

export default Jokes;
