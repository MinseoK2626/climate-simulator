function RoundSummary({ year, co2, money, nextRound }) {

  return (

    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#1f4037,#99f2c8)"
    }}>

      <h1>Round Complete</h1>

      <h2>Year {year} Finished</h2>

      <p>CO2 Level: {co2}</p>

      <p>Money Remaining: {money}</p>

      <button
        onClick={nextRound}
        style={{
          padding: "15px 25px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          background: "#4CAF50",
          color: "white",
          cursor: "pointer"
        }}
      >
        Next Round →
      </button>

    </div>

  );

}

export default RoundSummary;