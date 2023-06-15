import "../css/utility-classes.css";
import "../css/Contact.css";
import { LoaderScreen } from "./LoaderScreen";
export function Contact() {
  return (
    <>
    <LoaderScreen/>
    <div className="contact-parent-container">
      <div className="contact-title-container text">
        <h1>Contact</h1>
      </div>
      <div className="contact-content-container text">
        <h2 style={{ fontSize: "30px" }}>Get in touch!</h2>
        <br></br>
        <div className="contact-container-sub">
          <span style={{ fontSize: "20px" }}>Send me an email at </span>
          <a href="mailto:nhcathcart@gmail.com" className="contact-link">
            nhcathcart@gmail.com
          </a>
        </div>
        <div className="contact-container-sub">
          <span style={{ fontSize: "20px" }}>Or find me on </span>
          <a href="https://www.github.com/nhcathcart" target="_blank" rel="noopener noreferrer" className="contact-link">
            Github
          </a>
          <span style={{ fontSize: "20px" }}> or </span>
          <a href="https://www.linkedin.com/in/nhcathcart/" className="contact-link" target="_blank" rel="noopener noreferrer">
            LinkedIn.
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
