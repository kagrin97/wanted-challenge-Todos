import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./router/Auth";
import Home from "./router/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
