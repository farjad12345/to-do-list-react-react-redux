import { configureStore } from "@reduxjs/toolkit";
import todoApp from "./store/Todos";
const store = configureStore({
  reducer: todoApp,
});  export default store
