import "../css/utility-classes.css";
import "../css/Contact.css";
export function Contact() {
  return (
    <div className="contact-parent-container">
      <div className="contact-title-container text">
        <h1>Contact</h1>
      </div>
      <div className="contact-content-container text">
        <h2 style={{ fontSize: "30px" }}>Get in touch!</h2>
        <br></br>
        <div>
          <h3 style={{ fontSize: "20px" }}>Send me an email at </h3>
          <a href="mailto:nhcathcart@gmail.com" className="contact-link">
            nhcathcart@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
