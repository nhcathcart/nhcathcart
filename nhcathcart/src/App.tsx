import { useAppSelector, useAppDispatch } from "./hooks";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { ProjectList } from "./components/ProjectList"
import { Snippets } from "./components/Snippets"
import { Vizualizations } from "./components/Vizualizations";
import { Contact } from "./components/Contact"
import "./css/App.css";
import "./css/utility-classes.css"
import { OtherStuff } from "./components/OtherStuff";
function App() {

  const state = useAppSelector((state) => state.viewChoice);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <div className="page-container primary">
        <NavBar />
        <div className="content">
          {state.about? <About/> : null}
          {state.projects? <ProjectList/>: null}
          {state.snippets? <Snippets/>: null}
          {state.other? <OtherStuff/>: null}
          {state.visualizations? <Vizualizations/> : null}
          {state.contact? <Contact/> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
