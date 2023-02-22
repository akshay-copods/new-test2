import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const Header = React.lazy(() => import("shel/Header"))
const Layout = React.lazy(() => import("shel/Layout"))

const App = () => (
  <React.Suspense fallback={<h1>Loading</h1>}>
    <Layout />
  </React.Suspense>

);
ReactDOM.render(<App />, document.getElementById("app"));
