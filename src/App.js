import Header from './components/Header';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import ProductDetail from './components/productDetail';
import ProductListing from './components/productListing';

function App() {
    return ( <div className='App'>
        <Router>
           
          <Header/>

           
            <Routes> 
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
         
            
        </Router>
        </div>
    )

}
export default App;

function NotFound() {
    return <div>404 Not Found!</div>;
  }