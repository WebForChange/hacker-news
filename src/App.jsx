import { useCallback, useEffect, useState } from "react";
import NewsFeed from "./components/NewsFeed";
import SearchBar from "./components/SearchBar";
import Error from "./components/Error";
import Navbar from "./components/NavBar";
import axios from "axios";

function App() {
  const [apiLink, setApiLink] = useState(
    "https://hn.algolia.com/api/v1/search_by_date?&tags=front_page"
  );
  const [apiResults, setApiResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const [currentSite, setCurrentSite] = useState(1);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSearch = () => {
    setApiResults(false);
    console.log("Search triggered with term:", searchTerm);
    setApiLink(
      `https://hn.algolia.com/api/v1/search_by_date?query=${searchTerm}&tags=story`
    );
  };

  const getData = async () => {
    try {
      await axios.get(apiLink).then((news) => {
        setApiResults(news.data);
      });
    } catch (error) {
      setError(error);
      console.error("Error fetching data:", error);
    }
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
      {!error ? (
        <NewsFeed
          apiResults={apiResults}
          currentSite={currentSite}
          setCurrentSite={setCurrentSite}
        />
      ) : (
        <Error error={error} />
      )}
    </div>
  );
}

export default App;
