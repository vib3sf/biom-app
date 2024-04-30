import "./SearchBar.css";

export function SearchBar({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <header className="App-header">
      <div className="App-search-box">
        <i className="uil uil-search"></i>
        <label htmlFor="search"></label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          placeholder="Search..."
          id="search"
        ></input>
      </div>
    </header>
  );
}
