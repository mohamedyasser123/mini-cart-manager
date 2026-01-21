import './App.css';
import Cart from './component/Cart';
import ProductList from './component/ProductList';


function App() {
  return (
     <>
      <h1>Mini Cart Manager</h1>
      <ProductList></ProductList>
      <Cart />
    </>
  );
}

export default App;
