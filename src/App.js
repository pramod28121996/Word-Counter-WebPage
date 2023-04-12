import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [totalWords, setTotalWords] = useState(0);

  const getWords = async () => {    
    alert("hello")
    // chrome.storage.sync.get("totalWords", (data) => {
    //   //setTotalWords(data.totalWords);
    //   console.log(data);
    // });
    debugger
    const foo = await chrome.storage.session.get('foo');
    // const name="Pramod";
    // chrome.storage.sync.set({name},()=>{
    //   console.log(`My name is set ${name}`)
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
