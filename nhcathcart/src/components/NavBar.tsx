import { useAppSelector, useAppDispatch } from "../hooks";
import {
  chooseAbout,
  chooseSnippets,
  chooseProjects,
  chooseOther,
} from "../reducers/viewReducer";
import "../css/Navbar.css";
import "../css/utility-classes.css";

export function NavBar() {
  const state = useAppSelector((state) => state.viewChoice);
  const dispatch = useAppDispatch();

  function toggleFullPageMenu() {
    const menu = document.querySelector(".full-page-menu");
    menu?.classList.toggle("full-page-menu-show");
  }
  return (
    <nav className="text">
      <div className="title-container">
        <h1 className="title">nhcathcart</h1>
      </div>
      <div className="hamburger-menu">
        <button
          onClick={() => {
            toggleFullPageMenu();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="full-page-menu">
        <button
          className="nav-button-full"
          onClick={() => {
            dispatch(chooseAbout());
            toggleFullPageMenu();
          }}
        >
          about
        </button>
        <button
          className="nav-button-full"
          onClick={() => {
            dispatch(chooseProjects());
            toggleFullPageMenu();
          }}
        >
          projects
        </button>
        <button
          className="nav-button-full"
          onClick={() => {
            dispatch(chooseSnippets());
            toggleFullPageMenu();
          }}
        >
          snippets
        </button>
        <button
          className="nav-button-full"
          onClick={() => {
            dispatch(chooseOther());
            toggleFullPageMenu();
          }}
        >other stuff</button>
      </div>
      <div className="nav-button-container">
        <button
          className="nav-button"
          onClick={() => {
            dispatch(chooseAbout());
          }}
        >
          about
        </button>
        <button
          className="nav-button"
          onClick={() => {
            dispatch(chooseProjects());
          }}
        >
          projects
        </button>
        <button
          className="nav-button"
          onClick={() => {
            dispatch(chooseSnippets());
          }}
        >
          snippets
        </button>
        <button
          className="nav-button"
          onClick={() => {
            dispatch(chooseOther());
          }}
        >
          other stuff
        </button>
      </div>
    </nav>
  );
}
