import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  const [stars, setStars] = useState(3);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{`Current rating: ${stars}`}</p>
        <div>
          <StarRating totalStars={5} handleSelection={setStars} />
        </div>
      </header>
    </div>
  );
}

export default App;
