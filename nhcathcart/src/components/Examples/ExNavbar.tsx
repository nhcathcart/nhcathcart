import "./exCss/ExNavbar.css";

export function ExNavbar() {
  function toggleFullPageMenu() {
    const menu = document.querySelector(".ex-full-page-menu");
    menu?.classList.toggle("ex-full-page-menu-show");
  }
  return (
    <nav className="ex-nav">
      <div className="ex-title-container">
        <h1 className="ex-title">title</h1>
      </div>
      <div className="ex-hamburger-menu">
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
      <div className="ex-full-page-menu">
        <button
          className="ex-nav-button-full"
          onClick={() => {
            //Whatever you want the button to do goes here
            toggleFullPageMenu();
          }}
        >
          view1
        </button>
        <button
          className="ex-nav-button-full"
          onClick={() => {
            //Whatever you want the button to do goes here
            toggleFullPageMenu();
          }}
        >
          view2
        </button>
        <button
          className="ex-nav-button-full"
          onClick={() => {
            //Whatever you want the button to do goes here
            toggleFullPageMenu();
          }}
        >
          view3
        </button>
        <button
          className="ex-nav-button-full"
          onClick={() => {
            //Whatever you want the button to do goes here
            toggleFullPageMenu();
          }}
        >
          view4
        </button>
      </div>
      <div className="ex-nav-button-container">
        <button
          className="ex-nav-button"
          onClick={() => {
            //Whatever you want the button to do goes here
          }}
        >
          view1
        </button>
        <button
          className="ex-nav-button"
          onClick={() => {
            //Whatever you want the button to do goes here
          }}
        >
          view2
        </button>
        <button
          className="ex-nav-button"
          onClick={() => {
            //Whatever you want the button to do goes here
          }}
        >
          view3
        </button>
        <button className="ex-nav-button">other stuff</button>
      </div>
    </nav>
  );
}
