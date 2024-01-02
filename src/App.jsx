import { useCallback, useEffect, useState } from "react";
import NewsFeed from "./components/NewsFeed";

function App() {
  const [apiLink, setApiLink] = useState("https://hn.algolia.com/api/v1/search_by_date?&tags=front_page");
  const [apiResults, setApiResults] = useState(false);

  const getData = () => {
    fetch(apiLink)
      .then((response) => response.json())
      .then((news) => {
        console.log(news);
        setApiResults(news);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NewsFeed apiResults={apiResults} />
    </>
  );
}

export default App;
