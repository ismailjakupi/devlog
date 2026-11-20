import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Devlog</h1>
      <nav>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/notes">Notes</NavLink>
        <button>About Me ↗</button>
      </nav>
    </header>
  );
}
