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

  const vizualizationArray = vizArray.map((viz, index) => {
    return (
      <Viz
        title={viz.title}
        vizualization={viz.vizualizaiton}
        code={viz.code}
        key={`viz-${index}`}
      />
    );
  });
  const vizButtonArray = vizArray.map((viz, index)=>{
    return (
      <button
          className="snippet-sidebar-button"
          onClick={()=>scrollToElement(viz.title)}
          key={`vizButton-${index}`}
        >
          {viz.title}
        </button>
    )
  })
  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
    <LoaderScreen/>
    <div className="snippets-parent-container text">
      <div className="snippets-sidebar primary-darker text">
        {vizButtonArray}
      </div>
      <div className="snippets-content-container">
        <h1 className="snippet-title-super">Visualizations</h1>
        <h2 className="snippets-title">
        This is a bit of a work in progress. The goal is to make a library
            of data visualizations. I'm using visx for the D3 wrapper and framer
            motion for the animations.
        </h2>
        {vizualizationArray}
      </div>
      </div>
    </>
  );
}
