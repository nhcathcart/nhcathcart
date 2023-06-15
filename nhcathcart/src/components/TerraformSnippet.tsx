import { ReactElement, useState } from "react";
import { CodeBlock } from "./CodeBlock";
import "../css/utility-classes.css";
import "../css/Snippets.css";

export function TerraformSnippet(props: {
  title: string;
  description: string;
  code: string;
}) {
  const { title, description, code} = props;
  const content = <CodeBlock language={"terraform"}>{code}</CodeBlock>;
  return (
    <div className="snippet-container text">
      <h1 className="snippet-title" id={title}>{title}</h1>
      <div className="snippet-description">
        <p>{description}</p>
      </div>
      <div className="snippet-codeblock">{content}</div>
    </div>
  );
}