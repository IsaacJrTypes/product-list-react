import logo from './logo.svg';
import './App.css';
import { products } from './data/products';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className="bg-cyan-950 flex justify-center items-center">
     <ProductList products={products}/>
    </div>
  );
}

export default App;
