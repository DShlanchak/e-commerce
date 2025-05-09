import { Route, Routes } from 'react-router-dom'
import './App.css';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductsByCategory from './pages/ProductsByCategory';
import Sale from './pages/Sale';
import NotFound from './pages/NotFound';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import SilgleProduct from './pages/SilgleProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<AllProducts/>} />
          <Route path='products/:id' element={<SilgleProduct/>} />
          <Route path='sale' element={<Sale/>} />
          <Route path='categories' element={<Categories/>} />
          <Route path='categories/:categoryId' element={<ProductsByCategory/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='*' element={<NotFound/>}  />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
