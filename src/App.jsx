import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Layout from "./components/layout";
import NotFound from "./pages/notfound";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import About from "./pages/about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {" "}
          <Route path="" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
