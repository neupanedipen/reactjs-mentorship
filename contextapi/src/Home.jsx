// import { useContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useAppContext } from "./context/ThemeContext";
// import ThemeContext from "./context/ThemeContext";

function Home() {
  const { theme, toggleTheme } = useAppContext();
  console.log(theme);
  // const value = useContext(ThemeContext);
  // const [theme, setTheme] = useState(value.theme);
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   console.log(newTheme);
  //   setTheme(newTheme);
  // };
  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <h2>Application of React Context Hooks</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum sint
        modi, dolorem architecto vero fugiat obcaecati accusamus quo suscipit
        ipsa fugit reiciendis possimus nisi, optio corporis repellat asperiores
        atque alias sit nobis veniam, dolores maxime voluptate? Dolore
        praesentium, harum molestiae, neque sapiente voluptates nemo impedit
        error facere dolores rerum ex?
      </p>
      <button onClick={toggleTheme}>Toogle Theme</button>
    </div>
  );
}

export default Home;
