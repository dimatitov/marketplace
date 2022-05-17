import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./i18n";

import { App } from "App/App";
import { store } from "Core/store";

import "./index.scss";
import "./assets/colors.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    {/*FIXME Warning:(18, 6) Element App doesn't have required attribute location*/}
    <App />
  </Provider>,
);
