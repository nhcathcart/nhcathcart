import { useAppSelector, useAppDispatch } from "./hooks";
import { NavBar } from "./components/Navbar";
import { About } from "./components/About";
import { ProjectList } from "./components/ProjectList"
import "./css/App.css";
import "./css/utility-classes.css"
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
        </div>
      </div>
    </div>
  );
}

export default App;
