//! loads main content statically
import Markdown from "react-markdown";
import markdownText from "../../content/index.md?raw";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Markdown>{markdownText}</Markdown>
    </>
  );
}
