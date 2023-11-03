import React from "react";
import { createRoot } from 'react-dom/client';
import {Counter} from "./components/Counter";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div><h1>Name: microapp2</h1></div>
      <div><Counter/></div>
  </div>

);



const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
