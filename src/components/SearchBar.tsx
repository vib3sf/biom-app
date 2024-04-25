export function SearchBar({ setSearch }: { setSearch: Function }) {
  return (
    <header className="App-header">
      <label htmlFor="search"></label>
      <input
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
        placeholder="Search..."
        id="search"
      ></input>
    </header>
  );
}
