import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSearch = () => {
    console.log("Search triggered with term:", searchTerm);
    // Todo: Add search logic here
  };

  return (
    <>
      <SearchBar
        placeholder="Search..."
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
      />
    </>
  );
}

export default App;
