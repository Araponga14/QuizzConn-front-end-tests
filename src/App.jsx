import "./App.css";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <>
      <Sidebar></Sidebar>
      {/* outras coisas da Home */}
    </>
  );
}

export default App;
