import React from "react";
import "./App.css";
import { Button } from "./stories/Button";
import { Title } from "./stories/Title";

function App() {
  return (
    <div className="App">
      <Title size="28px" text="Bigger Title here..." />
      <Button
        backgroundColor="#6875E5"
        label="Hello World!"
        onClick={() => {}}
        primary
        size="medium"
      />
    </div>
  );
}

export default App;
