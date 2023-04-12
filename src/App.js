/*global chrome*/
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [totalWords, setTotalWords] = useState(0);

  const getWords = async () => {    
    // alert()
    // chrome.storage.sync.get("totalWords", (data) => {
    //   //setTotalWords(data.totalWords);
    //   console.log(data);
    // });
  };

  return (
    <div>
      <button onClick={getWords}>Get Words</button>
      <p>Total Words: {totalWords}</p>
    </div>
  );
}

export default App;
