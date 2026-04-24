import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ViewInvoice from "./components/ViewInvoice";
import CreateInvoice from "./components/CreateInvoice";
import { useState } from "react";

const App = () => {
  const asideIsOpen = JSON.parse(localStorage.getItem("asideOpen")) || false;
  const lightTheme = localStorage.getItem("isLightTheme")
  
  const [isLight, setIsLight] = useState(lightTheme || true)
  
  function handleSelectedTheme() {
      setIsLight(prevState => !prevState)
      localStorage.setItem("isLightTheme", isLight)
    }

  return (
    <div className={`container ${isLight ? "light-theme" : "dark-theme"}`}>
      <Router>
        <NavBar onTheme= {handleSelectedTheme} light={isLight}/>
        {asideIsOpen && <CreateInvoice />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view-invoice/:id" element={<ViewInvoice />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
