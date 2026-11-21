import { Routes, Route } from "react-router-dom";

// importing components
import Header from "./components/Header";

// importing pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

/*//! THIS LOADS ALL POSTS!
const posts = import.meta.glob("./content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});*/

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
