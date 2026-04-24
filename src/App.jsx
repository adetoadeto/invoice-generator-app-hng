import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ViewInvoice from "./components/ViewInvoice";
import CreateInvoice from "./components/CreateInvoice";
import { useEffect, useState } from "react";

const App = () => {
  const asideIsOpen = JSON.parse(localStorage.getItem("asideOpen")) || false;
  const lightTheme = JSON.parse(localStorage.getItem("lightTheme")) ?? true
  
  const [isLight, setIsLight] = useState(lightTheme)

  function handleSelectedTheme() {
      setIsLight(prevState => !prevState)
      localStorage.setItem("lightTheme", JSON.stringify(!isLight))
    }

  return (
    <div className={`container ${isLight ? "light-theme" : "dark-theme"}`}>
      <Router>
        <NavBar toggleTheme= {handleSelectedTheme} light={isLight}/>
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
