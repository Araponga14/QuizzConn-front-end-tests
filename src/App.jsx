import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

import Home from "./pages/Home";
import Class from "./pages/Class";
import Configs from "./pages/Configs";
import CreateQuiz from "./pages/CreateQuiz";
import QuizList from "./pages/QuizList";

function App() {
  // Configuração para expandir o Telegram
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.expand(); // Expande para tela cheia
    }
  }, []);

  return (
    <Router>
      {/* Navbar para navegação */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/class">Class</Link>
          </li>
          <li>
            <Link to="/configs">Configs</Link>
          </li>
          <li>
            <Link to="/create-quiz">Create Quiz</Link>
          </li>
          <li>
            <Link to="/quiz-list">Quiz List</Link>
          </li>
        </ul>
      </nav>

      {/* Configuração das Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<Class />} />
        <Route path="/configs" element={<Configs />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/quiz-list" element={<QuizList />} />
      </Routes>
    </Router>
  );
}

export default App;
