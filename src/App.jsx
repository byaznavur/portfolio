import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/shares/index";
import Layout from "./components/layout";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/home"));
const Projects = lazy(() => import("./pages/projects"));
const NotFound = lazy(() => import("./pages/notfound"));
const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));
const About = lazy(() => import("./pages/about"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      {" "}
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
    </Suspense>
  );
};

export default App;
