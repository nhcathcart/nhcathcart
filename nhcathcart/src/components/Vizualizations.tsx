// import { PieChart } from "./PieChart";
// import { BarChart } from "./BarChart";
// import { LineChart } from "./LIneChart";
import { vizArray } from "../assets/visualizations-plain-text";
import { Viz } from "./Viz";
import "../css/Visualizations.css";
import "../css/Snippets.css";
import "../css/utility-classes.css";
import { LoaderScreen } from "./LoaderScreen";
export function Vizualizations() {
  const vizualizationArray = vizArray.map((viz) => {
    return (
      <Viz
        title={viz.title}
        vizualization={viz.vizualizaiton}
        code={viz.code}
      />
    );
  });

  return (
    <>
      <LoaderScreen />

      <div className="vis-page-container text">
        <div className="vis-title-container text">
          <p className="snippets-title">
            This is a bit of a work in progress. The goal is to make a library
            of data visualizations. I'm using visx for the D3 wrapper and framer
            motion for the animations.
          </p>
        </div>
        {vizualizationArray}
      </div>
    </>
  );
}
