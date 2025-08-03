import { HashRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import InputNamePage from "./pages/InputName";
import ChangeUsername from "./pages/ChangeUsername";
import Difficulty from "./pages/DifficultyOption";
import Question from "./pages/Question";
import Result from "./pages/Result";

// Import Components
import Navbar from "./components/comon/navbar";
import Footer from "./components/comon/footer";
import ScrollToTop from "./components/elements/ScrillToTop";

function App() {
  return (
    <HashRouter>
      <main className="bg-white text-dark relative">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/play/quiz/inputname" element={<InputNamePage />} />
          <Route path="/play/quiz/difficulty" element={<Difficulty />} />
          <Route
            path="/play/quiz/changeusername"
            element={<ChangeUsername />}
          />
          <Route path="/play/quiz/questions" element={<Question />} />
          <Route path="/play/quiz/result" element={<Result />} />
        </Routes>
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
