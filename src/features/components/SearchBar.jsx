function SearchBar() {
  return (
    <div className="flex items-center justify-center w-full h-8 sm:justify-end ">
      <input
        placeholder="Search... /"
        type="text"
        name="query"
        id=""
        className="flex-grow h-full px-3 sm:flex-grow-0 bg-cyan-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset-2"
      />
      <button className="w-20 h-full px-3 font-semibold text-white bg-black rounded-r-md">Search</button>
    </div>
  );
}

export default SearchBar;
