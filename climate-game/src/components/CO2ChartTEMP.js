import { Line } from "react-chartjs-2";

import {
Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement
} from "chart.js";

ChartJS.register(
LineElement,
CategoryScale,
LinearScale,
PointElement
);

function CO2Chart({ history }) {

  const data = {

    labels: history.map((_, i) => i + 1),

    datasets: [
      {
        label: "CO2 Emissions",
        data: history,
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76,175,80,0.3)",
        tension: 0.3
      }
    ]

  };

  return <Line data={data} />;

}

export default CO2Chart;