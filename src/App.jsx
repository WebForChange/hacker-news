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
import Navbar from "./components/NavBar";

function App() {
  const [apiLink, setApiLink] = useState(
    "https://hn.algolia.com/api/v1/search_by_date?&tags=front_page"
  );
  const [apiResults, setApiResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSearch = () => {
    console.log("Search triggered with term:", searchTerm);
    setApiLink(
      `http://hn.algolia.com/api/v1/search_by_date?query=${searchTerm}&tags=story`
    );
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
    <div className="mt-2 mx-0 sm:mx-20 md:mx-40 lg:mx-80">
      <Navbar />
      <SearchBar
        placeholder="Search..."
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
      />
      <NewsFeed apiResults={apiResults} />
    </div>
  );
}

export default App;
