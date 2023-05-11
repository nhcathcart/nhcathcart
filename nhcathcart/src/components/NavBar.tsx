import { useAppSelector, useAppDispatch } from "../hooks";
import { chooseAbout, chooseSandBox, chooseProjects } from "../reducers/viewReducer";
import "../css/Navbar.css";
import "../css/utility-classes.css";

export function NavBar() {

  const state = useAppSelector((state) => state.viewChoice);
  const dispatch = useAppDispatch();

  return (
    <nav className="text">
      <div className="title-container">
        <h1 className="title">nhcathcart</h1>
      </div>
      <div className="nav-button-container">
        <button className="nav-button" onClick={()=>{dispatch(chooseAbout())}}>about</button>
        <button className="nav-button" onClick={()=>{dispatch(chooseProjects())}}>projects</button>
        <button className="nav-button">snippets</button>
        <button className="nav-button">other stuff</button>
      </div>
    </nav>
  );
}
