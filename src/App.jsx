import { useCallback, useEffect, useState } from "react";
import NewsFeed from "./components/NewsFeed";
import SearchBar from "./components/SearchBar";

function App() {
  const [apiLink, setApiLink] = useState("https://hn.algolia.com/api/v1/search_by_date?&tags=front_page");
  const [apiResults, setApiResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSearch = () => {
    console.log("Search triggered with term:", searchTerm);
    setApiLink(`http://hn.algolia.com/api/v1/search_by_date?query=${searchTerm}`);
    // Todo: Add search logic here
  };

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
  }, [apiLink]);

  return (
    <>
      <NewsFeed apiResults={apiResults} />
      <SearchBar placeholder="Search..." onSearchChange={handleSearchChange} onSearch={handleSearch} />
    </>
  );
}

export default App;
