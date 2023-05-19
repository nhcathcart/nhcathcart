import "../css/About.css";
import "../css/utility-classes.css";
import { Logo } from "./Logo";
export function About() {
  return (
    <div id="About" className="about-container text">
      <div className="about-container-left">
        <h4 className="animate-about-1 text">Hi my name is</h4>
        <h1 className="animate-about-2 text">Nicholas Cathcart.</h1>
        <h5 className="animate-about-3 text">
          I build stuff for the internet.
        </h5>
        <h6 className="about-p">
          Welcome! <br></br>Check out some of my recent work in the projects
          section. Or take a look at some premade components and other usefull
          code blocks in the snippets section. "Other stuff" is for pasta,
          chess, and playlists.
        </h6>
      </div>
      <div className="about-container-right">
        {/* <div className="blue-blob primary-darker"/> */}
        <div className="svg-container">
         <Logo/>
        </div>
        
      </div>
    </div>
  );
}
