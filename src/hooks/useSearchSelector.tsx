import { useSelector } from "react-redux";
import { SearchState } from "../store";

export const useAppSelector = useSelector.withTypes<SearchState>()