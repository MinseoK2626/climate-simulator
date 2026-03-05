import "./../App.css";

function Welcome({ startGame }) {

  return (

    <div className="welcome">

      <h1>🌍 Climate Simulation</h1>

      <p className="subtitle">
        Can you reduce carbon emissions and save the world?
      </p>

      <button
        className="startButton"
        onClick={startGame}
      >
        Start Simulation
      </button>

    </div>

  );
}

export default Welcome;