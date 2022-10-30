import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NoiseLayer from "./components/NoiseLayer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import GlobalStyle from "./globalStyle";
import Chatbox from "./components/Chatbox/index";

const App = () => {
  return (
    <Router basename="/">
      <GlobalStyle />
      <NoiseLayer />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
      <Footer />
      <Chatbox />
    </Router>
  );
};

export default App;
