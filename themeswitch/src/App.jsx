import { useState } from "react";
import { themeContext } from "./context/themeContext";
import { useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/btn.jsx";

function App() {
  const [themeMode, setthemeMode] = useState("dark")
  const lighttheme = () =>{
    console.log("Switching to light theme");
    setthemeMode("light")
  }
  const darktheme = () =>{
    console.log("Switching to dark theme");
    setthemeMode("dark")
  }
  useEffect(() => {
     document.querySelector("html").classList.remove("light", "dark");
     document.querySelector("html").classList.add(themeMode);
  }, [themeMode])


  return (
    <themeContext.Provider value={{ themeMode, lighttheme, darktheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App
