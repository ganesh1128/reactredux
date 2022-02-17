import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetatil";

function App() {
  return (
    <div className="App">
      <Routes>
      <Header />
     
      <Route path="/" exact component={ProductListing} />
     <Route path="/product/:productId" exactcomponent={ProductDetail} />
     <Route>404 not found</Route>
      
    
      </Routes>
     
    </div>
  );
}

export default App;
