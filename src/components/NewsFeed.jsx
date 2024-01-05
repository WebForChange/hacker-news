import News from "./News";

const NewsFeed = ({ apiResults, currentSite, setCurrentSite }) => {
  return (
    <section>
      <ul aria-label="news feed" className="flex flex-col gap-4 mt-4 max-w-screen-2xl mx-auto">
        {!apiResults
          ? [...Array(10)].map((_, index) => <News key={index} />)
          : currentSite === 1
          ? apiResults.hits.slice(0, 10).map((entry) => <News currentNews={entry} key={entry.objectID} />)
          : currentSite === 2
          ? apiResults.hits.slice(10).map((entry) => <News currentNews={entry} key={entry.objectID} />)
          : null}
      </ul>
      <div className="p-2 flex justify-center gap-2">
        <span className="cursor-pointer" onClick={currentSite === 2 ? () => setCurrentSite(currentSite - 1) : undefined}>
          &lt;
        </span>
        <p> Site {currentSite} from 2 </p>
        <span className="cursor-pointer" onClick={currentSite === 1 ? () => setCurrentSite(currentSite + 1) : undefined}>
          &gt;
        </span>
      </div>
    </section>
  );
};

export default NewsFeed;
