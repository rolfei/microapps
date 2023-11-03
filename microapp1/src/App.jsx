import React from "react";
import ReactDOM from "react-dom";
import {Counter} from 'counter/Counter'

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div><h1 class="text-4xl font-bold text-center text-gray-800 my-4">Name: microapp1 </h1><br /> Loading counter Component from microapp2</div>

      <Counter/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
