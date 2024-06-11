import React from "react";
import Counter from "./components/Counter.js";
import Say from "./components/Say.js";
const App = () => {
  return (
    <div>
      <Counter name="접속인수">0</Counter>
      <Say />
    </div>
  );
};

export default App;