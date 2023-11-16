import React from 'react';
import './App.css';
import Header from './components/home/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import HomePage from "./components/pageContent/HomePage"
import Footer from './components/home/Header/Footer';
import AboutPage from './components/pageContent/AboutPage';
import TechPage from './components/pageContent/TechPage';
import ProductPage from './components/pageContent/ProductPage';
import ContactPage from './components/pageContent/ContactPage';
import ServicePage from './components/pageContent/ServicePage';
import AboutDir from './components/pageContent/AboutDir';
import Carrier from './components/pageContent/Carrier';



function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/about' exact element={<AboutPage/>}/>
          <Route path='/about/AboutCEO' exact element={<AboutDir/>}/>
          <Route path='/service/Carrier' exact element={<Carrier/>}/>
          <Route path='/service' exact element={<ServicePage/>}/>
          <Route path='/technology' exact element={<TechPage/>}/>
          <Route path='/products' exact element={<ProductPage/>}/>
          <Route path='/contact' exact element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
