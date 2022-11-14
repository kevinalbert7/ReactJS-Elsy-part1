import React from "react";

import Step from "./components/Box";
import "./styles/global.css";

const tempMin = -20;
const heartMin = 80;
const stepsMin = 0;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
          <Step icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Step
            icon="directions_walk"
            color="black"
            value={3000}
            unit="steps"
          />
          <Step icon="favorite" color="red" value={120} unit="bpm" />
          <Step icon="wb_sunny" color="yellow" value={-10} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;
