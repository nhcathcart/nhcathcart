import { components } from "../assets/plain-text-components";
import { SnippetItem } from "./SnippetItem";
import { ReactSnippet } from "./ReactSnippet";
import { useState } from "react";
import "../css/Snippets.css";
import "../css/utility-classes.css";
import { DockerSnippet } from "./DockerSnippet";
import { dockerPlain } from "../assets/docker-plain-text";
import { terraformPlain } from "../assets/terraform-plain-text";
import { TerraformSnippet } from "./TerraformSnippet";
import { LoaderScreen } from "./LoaderScreen";

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

  const dockerSnippetArray = dockerPlain.map((item) => {
    return (
      <DockerSnippet
        title={item.title}
        description={item.description}
        code={item.code}
      />
    );
  });

  const terraformSnippetArray = terraformPlain.map((item) => {
    return (
      <TerraformSnippet
      title={item.title}
      description={item.description}
      code={item.code}
      />
    )
  })
  const reactSnippetTitle = "These are some components I've made that I find myself reusing."

  return (
    <>
    <LoaderScreen/>
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
        {viewState.docker? dockerSnippetArray: null}
        {viewState.terraform? terraformSnippetArray: null}
      </div>
    </div>
    </>
  );
}
