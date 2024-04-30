import { useDispatch } from "react-redux";
import "./SearchBar.css";

export function SearchBar() {
  const dispatch = useDispatch();

  const updateSearch = (updatedSearch: string): void => {
    dispatch({ type: "UPDATE_SEARCH", payload: updatedSearch });
  };

  return (
    <header className="App-header">
      <div className="App-search-box">
        <i className="uil uil-search"></i>
        <label htmlFor="search"></label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateSearch(e.target.value)
          }
          placeholder="Search..."
          id="search"
        ></input>
      </div>
    </header>
  );
}
