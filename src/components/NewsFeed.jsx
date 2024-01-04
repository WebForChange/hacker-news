import News from "./News";

const NewsFeed = ({ apiResults, currentSite, setCurrentSite }) => {
  console.log("RESULTS:", apiResults);
  return (
    <section>
      <ul aria-label="news feed" className="flex flex-col gap-4 mt-4 max-w-screen-2xl mx-auto">
        {currentSite === 1 ? apiResults.hits.map((news, index) => (index < 10 ? <News currentNews={news} key={news.objectID} /> : undefined)) : apiResults.hits.map((news, index) => (index >= 10 ? <News currentNews={news} key={news.objectID} /> : undefined))}
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
