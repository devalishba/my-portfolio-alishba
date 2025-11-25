
import About from "./assets/component/portfolio/About";
import Contacts from "./assets/component/portfolio/Contacts";
import Footer from "./assets/component/portfolio/footer";
import Header from "./assets/component/portfolio/header";
import Hero from "./assets/component/portfolio/Hero";
import Project from "./assets/component/portfolio/Project";
import Skill from "./assets/component/portfolio/Skill";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./assets/component/bookStore/books";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
      <About/>
      <Skill/>
      <Project/>
      <Contacts/>
        <Footer/>
        {/* <Books/> */}
    </>
  );
}
