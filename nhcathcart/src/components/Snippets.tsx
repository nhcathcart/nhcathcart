import { components } from "../assets/plain-text-components";
import { SnippetItem } from "./SnippetItem";
import "../css/Snippets.css"
import "../css/utility-classes.css";
export function Snippets() {
  const snippetArray = components.map((component) => {
    return (
      <SnippetItem
        title={component.title}
        description={component.description}
        example={component.example}
        JSX={component.JSX}
        CSS={component.CSS}
      />
    );
  });

  return (
    <div className="snippets-parent-container text">
      <div className="snippets-sidebar primary-darker text">
        <button className="snippet-sidebar-button">React Components</button>
        <button className="snippet-sidebar-button">Terraform Boilerplates</button>
        <button className="snippet-sidebar-button">Docker Commands</button>
      </div>
      <div className="snippets-content-container">
      <h1 className="snippets-title">
        {" "}
        These are some components I've made that I find myself reusing.{" "}
      </h1>
      {snippetArray}
      </div>
    </div>
  );
}
