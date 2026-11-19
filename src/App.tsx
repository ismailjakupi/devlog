import Markdown from "react-markdown";

import Header from "./components/Header";

const posts = import.meta.glob("./content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function App() {
  const text = posts["./content/test.md"];

  return (
    <>
      <Markdown>{text}</Markdown>
    </>
  );
}

export default App;
