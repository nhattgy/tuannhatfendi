import { createRoot } from "react-dom/client"; // Thay đổi dòng này

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
