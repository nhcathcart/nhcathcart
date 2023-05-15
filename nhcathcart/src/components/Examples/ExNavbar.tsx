import './exCss/ExNavbar.css'
export function ExNavbar() {
    return (
      <nav className="navbar">
        <div className="title-container">
          <h1 className="title">title</h1>
        </div>
        <div className="nav-button-container">
          <button className="nav-button" onClick={()=>{}}>view1</button>
          <button className="nav-button" onClick={()=>{}}>view2</button>
          <button className="nav-button" onClick={()=>{}}>view3</button>
          <button className="nav-button" onClick={()=>{}}>view4</button>
        </div>
      </nav>
    );
  }