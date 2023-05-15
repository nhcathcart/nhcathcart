import { useState } from "react";
import { ExNavbar } from "./Examples/ExNavbar";
import { CodeBlock } from "./CodeBlock";
import { components } from "../assets/plain-text-components";
import "../css/utility-classes.css";
import "../css/Snippets.css";
export function SnippetItem() {
  const [snippetView, setSnippetView] = useState({
    JSX: true,
    CSS: false,
  });
  function chooseView(choice: "JSX" | "CSS") {
    const newSnippetView = Object.assign({}, snippetView);
    if (choice === "JSX") {
      newSnippetView.JSX = true;
      newSnippetView.CSS = false;
      setSnippetView(newSnippetView);
    } else {
      newSnippetView.JSX = false;
      newSnippetView.CSS = true;
      setSnippetView(newSnippetView);
    }
  }
  let content;
  if (snippetView.JSX)
    content = (
      <CodeBlock language={"javascript"}>{components.navbar}</CodeBlock>
    );
  else content = <CodeBlock language={"css"}>{components.navbarCSS}</CodeBlock>;
  return (
    <div className="snippet-container text">
      <div className="snippet-description">
        A simple reactive Navbar. This one is used on this website. Scale down
        your screen to see the mobile version.
      </div>
      <div className="snippet-example">
        <ExNavbar />
      </div>
      <div className="snippet-button-container">
        <button className="snippet-button" onClick={() => chooseView("JSX")}>
          JSX
        </button>
        <button className="snippet-button" onClick={() => chooseView("CSS")}>
          CSS
        </button>
      </div>
      <div className="snippet-codeblock">{content}</div>
    </div>
  );
}
