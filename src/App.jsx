// API:
// Front page besteht aus fixiert 20 relevanten(!) neuen news. D.h. keine Seite 2
// Alle news absteigend via:
// https://hn.algolia.com/api/v1/search_by_date?page={setPage}&tags=story
// setPage needs to starts at 0
// Wir brauchen also einen Button zu alle news (am ende der liste?) und dann einen seitenwechsel auf der neuen "alle news" seite.
// Da die Seiten nicht begrenzt sind - eventuell ein "weiter" oder "mehr"?

import { useCallback, useEffect, useState } from "react";

import NewsFeed from "./components/NewsFeed";
import SearchBar from "./components/SearchBar";
import { HashLoader } from "react-spinners";

function App() {
  const [apiLink, setApiLink] = useState("https://hn.algolia.com/api/v1/search_by_date?&tags=front_page");
  const [apiResults, setApiResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSearch = () => {
    setApiResults(false);
    console.log("Search triggered with term:", searchTerm);
    setApiLink(`https://hn.algolia.com/api/v1/search_by_date?query=${searchTerm}&tags=story`);
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
      <SearchBar placeholder="Search..." onSearchChange={handleSearchChange} onSearch={handleSearch} />
      {!apiResults ? <HashLoader color="#36d7b7" /> : <NewsFeed apiResults={apiResults} />}
    </>
  );
}

export default App;
