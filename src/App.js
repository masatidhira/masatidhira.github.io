import React from "react"
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import "./App.css"


const App = () => {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/project" element={<ProjectPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
