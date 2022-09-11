import { useContext, useEffect } from "react";
import RedditContext from "../context/RedditContext";
import Loader from "./layout/Loader";

function Jokes() {
  const { jokes, jokeLoading, fetchJokes } = useContext(RedditContext);

  useEffect(() => {
    fetchJokes();
  }, []);

  if (jokeLoading) {
    return <Loader size="5" />;
  } else {
      const rndInt = Math.floor(Math.random() * 5) + 0
      const dropit = () => {
      const dropdownList = document.querySelector("#answer");
      dropdownList.classList.toggle("hidden");
    };
    console.log(jokes);
    console.log(jokes[rndInt]);
    if(jokes[rndInt]!=undefined){

        const title = jokes[rndInt].data.title
        const selftext = jokes[rndInt].data.selftext
        return (
            <div className="text-sm">
              <p
                type="button"
                className="font-bold text-white-500"
                onClick={dropit}
                id="dropdown"
              >
                {title}
              </p>
              <div id="answer" className="text-white-500 w-auto pt-2 hidden">
                {selftext}
              </div>
            </div>
        )
    }
    else{}
  }
}

export default Jokes;
