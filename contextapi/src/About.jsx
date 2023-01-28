import "./App.css";
import { useAppContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

function About() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <h2>About</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum sint
        modi, dolorem architecto vero fugiat obcaecati accusamus quo suscipit
        ipsa fugit reiciendis possimus nisi, optio corporis repellat asperiores
        atque alias sit nobis veniam, dolores maxime voluptate? Dolore
        praesentium, harum molestiae, neque sapiente voluptates nemo impedit
        error facere dolores rerum ex?
      </p>
    </div>
  );
}

export default About;
