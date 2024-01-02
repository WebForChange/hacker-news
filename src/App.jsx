import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
    <>
      <SearchBar placeholder="Search..." onSearchChange={handleSearchChange} />
    </>
  );
}

export default App;
