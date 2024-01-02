import News from "./News";

const NewsFeed = ({ apiResults }) => {
  console.log("RESULTS:", apiResults);
  return <ul className="flex flex-col gap-4 mt-4">{apiResults && apiResults.hits.map((news) => <News currentNews={news} key={news.objectID} />)};</ul>;
};

export default NewsFeed;
