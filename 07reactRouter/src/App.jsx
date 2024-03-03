import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
      </Route>
    )
  );

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:userid" element={<User />} />
          <Route loader={githubInfoLoader} path="github" element={<Github />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
