import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import "./index.scss";
import Layout from "./Layout";
const FormC = React.lazy(() => import("signup/FormC"))

const App = () => (
  <React.Suspense fallback={<h1>Loading</h1>}>

    <Layout form={<FormC />} header={<Header />} />
  </React.Suspense>

);
ReactDOM.render(<App />, document.getElementById("app"));
