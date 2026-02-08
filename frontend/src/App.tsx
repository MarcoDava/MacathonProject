import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HexagonBackground from "./Components/ui/hexagon";

function App() {

  return (
    <div>
      <Navbar />
      <HexagonBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App
