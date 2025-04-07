import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import sidebarIcon from "../assets/sidebar.svg";

import Home from "../pages/Home";
import Class from "../pages/Class";
import Configs from "../pages/Configs";
import CreateQuiz from "../pages/CreateQuiz";
import QuizList from "../pages/QuizList";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-5 left-5 bg-transparent border-none cursor-pointer z-50"
        onClick={toggleSidebar}
      >
        <img src={sidebarIcon} alt="Sidebar" className="w-8 h-8 bg-gray-50" />
      </button>
      <Router>
        <nav
          className={`fixed top-0 left-0 w-64 h-screen bg-gray-50 shadow-lg transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="mt-20">
            <li className="px-5 py-4 hover:bg-gray-100 transition-colors duration-200">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-500 text-lg block"
              >
                Home
              </Link>
            </li>
            <li className="px-5 py-4 hover:bg-gray-100 transition-colors duration-200">
              <Link
                to="/class"
                className="text-gray-700 hover:text-blue-500 text-lg block"
              >
                Class
              </Link>
            </li>
            <li className="px-5 py-4 hover:bg-gray-100 transition-colors duration-200">
              <Link
                to="/configs"
                className="text-gray-700 hover:text-blue-500 text-lg block"
              >
                Configs
              </Link>
            </li>
            <li className="px-5 py-4 hover:bg-gray-100 transition-colors duration-200">
              <Link
                to="/create-quiz"
                className="text-gray-700 hover:text-blue-500 text-lg block"
              >
                Create Quiz
              </Link>
            </li>
            <li className="px-5 py-4 hover:bg-gray-100 transition-colors duration-200">
              <Link
                to="/quiz-list"
                className="text-gray-700 hover:text-blue-500 text-lg block"
              >
                Quiz List
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="/configs" element={<Configs />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/quiz-list" element={<QuizList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Sidebar;
