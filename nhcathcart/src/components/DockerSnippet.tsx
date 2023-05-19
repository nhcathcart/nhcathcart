import { ReactElement, useState } from "react";
import { CodeBlock } from "./CodeBlock";
import "../css/utility-classes.css";
import "../css/Snippets.css";

export function DockerSnippet(props: {
  title: string;
  description: string;
  code: string;
}) {
  const { title, description, code} = props;
  const content = <CodeBlock language={"docker"}>{code}</CodeBlock>;
  return (
    <div className="snippet-container text">
      <h1 className="snippet-title">{title}</h1>
      <div className="snippet-description">
        <p>{description}</p>
      </div>
      <div className="snippet-codeblock">{content}</div>
    </div>
  );
}