import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ul className="monsters clearfix">
        <li className="monster-item bear">
          <img className="monster-item-cover" src="/bear.png" alt="" />
        </li>
        <li className="monster-item spacer">
          <img className="monster-item-cover" src="spacer.png" alt="" />
        </li>
        <li className="monster-item tomjerry">
          <img className="monster-item-cover" src="pngflow.com.png" alt="" />
        </li>
      </ul>
    </div>
  );
}

export default App;
