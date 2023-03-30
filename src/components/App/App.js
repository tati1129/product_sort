
import { Route, Routes } from "react-router-dom";
import AddFormPage from "../../pages/AddFormPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProductsPage from "../../pages/ProductsPage";
import Nav from "../Nav";



function App() {
  return (
    <div>
      <Nav />
      <Routes >
        <Route path="/addform" element={<AddFormPage />} />
        <Route path="/allproducts" element={<ProductsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
