import { components } from "../assets/plain-text-components";
import { SnippetItem } from "./SnippetItem";
import { ReactSnippet } from "./ReactSnippet";
import { useState } from "react";
import "../css/Snippets.css";
import "../css/utility-classes.css";

export function Snippets() {
  const [viewState, setViewState] = useState({
    react: true,
    terraform: false,
    docker: false,
  });

  const resetState = {
    react: false,
    terraform: false,
    docker: false,
  };

  function chooseView(choice: "react" | "terraform" | "docker") {
    const newViewState = Object.assign({}, resetState);
    newViewState[choice] = true;
    setViewState(newViewState);
  }

  const reactSnippetArray = components.map((component) => {
    return (
      <ReactSnippet
        title={component.title}
        description={component.description}
        example={component.example}
        JSX={component.JSX}
        CSS={component.CSS}
      />
    );
  });
  const reactSnippetTitle = "These are some components I've made that I find myself reusing."

  return (
    <div className="snippets-parent-container text">
      <div className="snippets-sidebar primary-darker text">
        <button
          className="snippet-sidebar-button"
          onClick={() => chooseView("react")}
        >
          React Components
        </button>
        <button
          className="snippet-sidebar-button"
          onClick={() => chooseView("terraform")}
        >
          Terraform Boilerplates
        </button>
        <button
          className="snippet-sidebar-button"
          onClick={() => chooseView("docker")}
        >
          Docker Commands
        </button>
      </div>
      <div className="snippets-content-container">
        <h1 className="snippets-title">
          {viewState.react? reactSnippetTitle: null}
        </h1>
        {viewState.react? reactSnippetArray: null}
        {viewState.docker? "THIS IS FOR DOCKER": null}
        {viewState.terraform? "THIS IS FOR TERRAFORM": null}
      </div>
    </div>
  );
}
