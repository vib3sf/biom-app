import "./SearchBar.css";

export function SearchBar({ setSearch }: { setSearch: Function }) {
  return (
    <header className="App-header">
      <div className="App-search-box">
        <i className="uil uil-search"></i>
        <label htmlFor="search"></label>
        <input
          onChange={(event) => setSearch(event.target.value.toLowerCase())}
          placeholder="Search..."
          id="search"
        ></input>
      </div>
    </header>
  );
}
