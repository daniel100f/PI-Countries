import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import DetailPage from "./components/DetailPage";
import Nav from "./components/Nav";
import Landing from "./components/LandingPage";
import ByName from "./components/ByName";



function App() {
  const location = useLocation();


  return ( 
    <div >
      {location.pathname !== "/" && <Nav  />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/HomePage" element={<HomePage  />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route path="/DetailPage/:id" element={<DetailPage />} />
        <Route path="/ByName/:name" element={<ByName />} />
      </Routes>
    </div>
  );
}

export default App;





