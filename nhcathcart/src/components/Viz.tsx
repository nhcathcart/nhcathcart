import { ReactElement } from "react";
import { CodeBlock } from "./CodeBlock";
import "../css/Visualizations.css";

export function Viz(props: {
  vizualization: ReactElement;
  code: string;
  title: string;
}) {
  const { vizualization, code, title } = props;
  return (
    <>
      <h1 className="snippet-title" id={title}>{title}</h1>
      <div className="vis-container">{vizualization}</div>
      <div className="snippet-container text">
        <div className="snippet-codeblock">
          <CodeBlock language={"javascript"}>{code}</CodeBlock>
        </div>
      </div>
    </>
  );
}
