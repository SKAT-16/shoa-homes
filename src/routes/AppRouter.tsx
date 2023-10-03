import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/home";
import Blog from "../components/Blog/blog";
import Projects from "../components/Projects/projects";
import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Partnership from "../components/Partnership/partnership";
import ProjectDetails from "../components/Projects/project_details";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="partnership" element={<Partnership />} />
      <Route path="projects" element={<Projects />}>
        <Route path=":projectId" element={<ProjectDetails />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRouter;
