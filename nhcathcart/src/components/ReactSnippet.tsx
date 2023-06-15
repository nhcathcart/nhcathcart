import { ReactElement, useState } from "react";
import { CodeBlock } from "./CodeBlock";
import "../css/utility-classes.css";
import "../css/Snippets.css";

export function ReactSnippet(props: {
  title: string;
  description: string;
  example: ReactElement;
  JSX: string;
  CSS: string;
}) {
  const { title, description, example, JSX, CSS } = props;
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
      <CodeBlock language={"javascript"}>{JSX}</CodeBlock>
    );
  else
    content = <CodeBlock language={"css"}>{CSS}</CodeBlock>;
  return (
    <div className="snippet-container text">
      <h1 className="snippet-title" id={title}>{title}</h1>
      <div className="snippet-description">
        <p>{description}</p>
      </div>
      <div className="snippet-example">{example}</div>
      <div className="snippet-button-container">
        <button className="snippet-button" onClick={() => chooseView("JSX")}>
          TSX
        </button>
        <button className="snippet-button" onClick={() => chooseView("CSS")}>
          CSS
        </button>
      </div>
      <div className="snippet-codeblock">{content}</div>
    </div>
  );
}