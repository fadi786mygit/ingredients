import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import BrowseIngredients from "./Pages/BrowseIngredients";
import SupplierUpload from "./Pages/SupplierUpload";
import About from "./Pages/About";
import Screening from "./Pages/Screening";
import Legal from "./Pages/Legal";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import SupplierDashboard from "./Pages/SupplierDashboard";
import BuyerDashboard from "./Pages/BuyerDashboard";
import AdminConsole from "./Pages/AdminConsole";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseIngredients />} />
        <Route path="/suppliers" element={<SupplierUpload />} />
        <Route path="/about" element={<About />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        
        <Route path="/dashboard/supplier" element={<SupplierDashboard />} />
        <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
        <Route path="/admin" element={<AdminConsole />} />
        <Route path="/product/:id" element={<ProductDetail />} />
  

    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
