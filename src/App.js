import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NoiseLayer from "./components/NoiseLayer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";
import GlobalStyle from "./globalStyle";

const App = () => {
  return (
    <Router basename="/">
      <GlobalStyle />
      <NoiseLayer />
      <Header />
      <Routes>
        <Route exact path="/" element={<ProfilePage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
