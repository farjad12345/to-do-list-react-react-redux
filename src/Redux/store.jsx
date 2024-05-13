import { legacy_createStore } from "redux";
import todoApp from "./store/Todos";
  const store = legacy_createStore(todoApp);
  export default store
