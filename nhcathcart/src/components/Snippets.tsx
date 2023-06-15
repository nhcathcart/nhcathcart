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

  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const reactSnippetArray = components.map((component, index) => {
    return (
      <ReactSnippet
        title={component.title}
        description={component.description}
        example={component.example}
        JSX={component.JSX}
        CSS={component.CSS}
        key={`react-snippet-${index}`}
      />
    );
  });

  const reactButtonArray = components.map((component, index) => {
    return (
    <button className="sub-button" onClick={()=>{scrollToElement(component.title)}} key={`${component.title}`}>{component.title}</button>
    )
  })
  const dockerSnippetArray = dockerPlain.map((item, index) => {
    return (
      <DockerSnippet
        title={item.title}
        description={item.description}
        code={item.code}
        key={`docker-snippet-${index}`}
      />
    );
  });
  const dockerButtonArray = dockerPlain.map((command, index) => {
    return (
    <button className="sub-button" onClick={()=>{scrollToElement(command.title)}} key={command.title}>{command.title}</button>
    )
  })
  const terraformSnippetArray = terraformPlain.map((item, index) => {
    return (
      <TerraformSnippet
      title={item.title}
      description={item.description}
      code={item.code}
      key={`terraform-snippet-${index}`}
      />
    )
  })
  const terraformButtonArray = terraformPlain.map((terra, index) => {
    return (
    <button className="sub-button" onClick={()=>{scrollToElement(terra.title)}} key={terra.title}>{terra.title}</button>
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
        <div className={viewState.react===true? "sub-button-container": "none-container"}>
          {reactButtonArray}
        </div>
        <button
          className="snippet-sidebar-button"
          onClick={() => chooseView("terraform")}
        >
          Terraform Boilerplates
        </button>
        <div className={viewState.terraform===true? "sub-button-container": "none-container"}>
          {terraformButtonArray}
        </div>
        <button
          className="snippet-sidebar-button"
          onClick={() => chooseView("docker")}
        >
          Docker Commands
        </button>
        <div className={viewState.docker===true? "sub-button-container": "none-container"}>
          {dockerButtonArray}
        </div>
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
