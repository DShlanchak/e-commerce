// import { Route, Router, Routes } from 'react-router-dom';
import './App.css';

// import MainLayout from './components/Layout/MainLayout';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<NotFound/>}  />
          </Route>
        </Routes>
      </Router> */}
      <Header/>
      <Main/>
      <Footer/>      
    </div>
  );
}

export default App;
