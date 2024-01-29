function SearchBar() {
  return (
    <div className="h-8">
      <input
        placeholder="Search... /"
        type="text"
        name="query"
        id=""
        className="bg-cyan-300 rounded-l-md h-full px-3 focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset-2"
      />
      <button className="rounded-r-md bg-black text-white h-full font-semibold px-3">Search</button>
    </div>
  );
}

export default SearchBar;
