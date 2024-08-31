
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Page from "./Components/Page";
import Form from "./Form";

function Init() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<App />} />
        <Route path="/page" element={<Page />} />
        <Route path="/admin" element={<Form />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default Init;
