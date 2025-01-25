import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";

import "./store/categories/categoriesSlice.ts";
import { Provider as ReduxProvider } from "react-redux";
import store from "@store/index";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <AppRouter />
  </ReduxProvider>
);
