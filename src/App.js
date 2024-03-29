import Header from "./containers/Header";
// import {  BrowserRouter, BrowserRouter as Route, Routes,} from 'react-router-dom'
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetatil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact element={<ProductDetail/>} />
          <Route>404 not found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
