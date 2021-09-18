import React, { useMemo } from "react";

import logo from "./logo.svg";
import "./App.css";

import TextSubject from "./TextSubject";
import TextFieldSubject from "./components/TextFieldSubject";
import TextFieldSubjectFC from "./components/TextFieldSubjectFC";
import TextFieldObserver from "./components/TextFieldObserver";
import TextFieldObserverFC from "./components/TextFieldObserverFC";

function App() {
  const subject = useMemo(() => new TextSubject(), []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TextFieldSubject subject={subject} />
        <TextFieldSubjectFC subject={subject} />
        <TextFieldObserver subject={subject} />
        <TextFieldObserverFC subject={subject} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
