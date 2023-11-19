import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./sass/_global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homework from "./pages/Homework";
import StudentResources from "./pages/StudentResources";
import ParentResources from "./pages/ParentResources";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/student-resources" element={<StudentResources />} />
        <Route path="/parent-resources" element={<ParentResources />} />
      </Routes>
    </Router>
  );
}

export default App;
