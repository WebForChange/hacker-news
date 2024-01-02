const SearchBar = ({ placeholder, onSearchChange, onSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex justify-start mt-5">
      <div className="flex border-2 border-gray-200 rounded">
        <input
          type="text"
          className="px-4 py-2 w-80"
          placeholder={placeholder}
          onChange={onSearchChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="px-4 text-white bg-blue-500 border-l"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
