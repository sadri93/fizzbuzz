import React, { useState } from "react";
import Start from "./components/StartModal";
import Modal from "./components/Modal/Modal";
import FizzBuzz from "./components/FizzBuzz/FizzBuzz";

function App() {
  return (
    <div>
      <Start>
        <FizzBuzz />
      </Start>
    </div>
  );
}

export default App;
