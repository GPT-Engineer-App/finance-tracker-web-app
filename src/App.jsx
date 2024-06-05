import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Economias from "./pages/Economias.jsx";
import Gastos from "./pages/Gastos.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/economias" element={<Economias />} />
        <Route path="/gastos" element={<Gastos />} />
      </Routes>
    </Router>
  );
}

export default App;
