import { useState } from "react";
import { scenarios } from "../scenario";
import RoundSummary from "./RoundSummary";
import "./Game.css";

function Game() {

  const [year, setYear] = useState(2026);
  const [co2, setCO2] = useState(1000);
  const [money, setMoney] = useState(100);

  const [sectorIndex, setSectorIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const yearScenarios = scenarios[year];
  const scenario = yearScenarios[sectorIndex];


  const chooseOption = (option) => {

  if (money < option.cost) {
    alert("Not enough McIntire Money!");
    return;
  }

  setMoney(prev => prev - option.cost);
  setCO2(prev => prev + option.co2);

 
  if (sectorIndex < yearScenarios.length - 1) {

  
    setSectorIndex(prev => prev + 1);

  } else {

  
    setShowSummary(true);

  }

};


  const nextRound = () => {

    setShowSummary(false);

    // 다음 sector
    if (sectorIndex < yearScenarios.length - 1) {

      setSectorIndex(prev => prev + 1);

    } 
    // 다음 year
    else {

      const nextYear = year + 1;

      if (scenarios[nextYear]) {

        setYear(nextYear);
        setSectorIndex(0);

      } else {

        alert("🌍 Simulation Complete!");

      }

    }

  };


  if (showSummary) {

    return (
      <RoundSummary
        year={year}
        co2={co2}
        money={money}
        nextRound={nextRound}
      />
    );

  }


  return (

    <div className="game">

      <div className="topbar">

        <div className="stat">
          <strong>Year</strong>
          <p>{year}</p>
        </div>

        <div className="stat">
          <strong>CO2</strong>
          <p>{co2}</p>
        </div>

        <div className="stat">
          <strong>McIntire Money</strong>
          <p>{money}</p>
        </div>

      </div>


      <div className="card">

        <h2>{scenario.sector}</h2>

        <p>{scenario.text}</p>

        {scenario.options.map((opt, i) => (

          <button
            key={i}
            className="optionButton"
            onClick={() => chooseOption(opt)}
          >

            <div>{opt.text}</div>

            <div className="optionMeta">
              Cost: {opt.cost} | CO2 Impact: {opt.co2}
            </div>

          </button>

        ))}

      </div>

    </div>

  );

}

export default Game;