import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ViewInvoice from "./components/ViewInvoice";

const App = () => {
  return (
    <div className="container dark-theme">

      <Router>
        <NavBar />
        <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/view-invoice/:id" element={<ViewInvoice />} />
        </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
