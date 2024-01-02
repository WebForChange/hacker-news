import News from "./News";

const NewsFeed = ({ apiResults }) => {
  console.log("RESULTS:", apiResults);
  return <>{apiResults && apiResults.hits.map((news) => <News currentNews={news} />)}</>;
};

export default NewsFeed;
