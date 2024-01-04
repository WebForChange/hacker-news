const SearchBar = ({ placeholder, onSearchChange, onSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div
      aria-label="search bar"
      className="flex justify-start mt-5 max-w-screen-2xl mx-auto"
    >
      <div className="flex flex-wrap rounded">
        <input
          type="text"
          className="px-4 py-2 w-80 focus:outline-none focus:border focus:border-red-500"
          placeholder={placeholder}
          onChange={onSearchChange}
          onKeyDown={handleKeyDown}
        />
        <button
          aria-label="search"
          className="px-4 min-h-10 text-white bg-orange-600 border-l"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
