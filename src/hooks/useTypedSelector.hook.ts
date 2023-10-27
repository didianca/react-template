import {useSelector as _useSelector, TypedUseSelectorHook} from "react-redux";
import { RootState} from "../state";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

//from documentation, issue with selector not knowing the types by default