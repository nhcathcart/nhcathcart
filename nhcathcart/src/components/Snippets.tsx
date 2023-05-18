import { components } from "../assets/plain-text-components";
import { SnippetItem } from "./SnippetItem";
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
    <div className="snippet-parent-container text">
      <h1 className="snippets-title">
        {" "}
        These are some components I've made that I find myself reusing.{" "}
      </h1>
      {snippetArray}
    </div>
  );
}
