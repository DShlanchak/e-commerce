import { Route, Routes } from 'react-router-dom'
import './App.css';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Sale from './pages/Sale';
import NotFound from './pages/NotFound';
import Categories from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products/>} />
          <Route path='sale' element={<Sale/>} />
          <Route path='categories' element={<Categories/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='*' element={<NotFound/>}  />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products/>} />
          <Route path='sale' element={<Sale/>} />
          <Route path="categories" element={<Categories />}>
            <Route path=":categoryId" element={<CategoryDetails />}>
              <Route path="overview/:productId" element={<ProductOverview />} />
              <Route path=":productId" element={<ProductDetails />} />
            </Route>
          </Route>
          <Route path='cart' element={<Cart/>} />
          <Route path='*' element={<NotFound/>}  />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
