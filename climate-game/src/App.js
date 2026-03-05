import { useState } from "react";
import Welcome from "./components/Welcome";
import Game from "./components/Game";

function App() {

  const [started, setStarted] = useState(false);

  return (

    <>
      {started ? (
        <Game />
      ) : (
        <Welcome startGame={() => setStarted(true)} />
      )}
    </>

  );
}

export default App;