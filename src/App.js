import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { SkillsPage } from "./components/SkillsPage";
import { Header } from "./components/Header";
import { AllProjects } from "./components/ProjectsPage/AllProjects";
import Footer from "./components/Footer";
import { AboutPage } from "./components/AboutPage";
import { ProjectsPage } from "./components/ProjectsPage";

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/all" element={<AllProjects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
