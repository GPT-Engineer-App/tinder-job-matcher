import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
