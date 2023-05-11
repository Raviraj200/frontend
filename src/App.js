import Footer from "./component/layout/Footer/Footer.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Header from "./component/layout/Header/Header.js";


import Home from "./component/Home/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./component/Home/Product.js";
  
function App() {

  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
 