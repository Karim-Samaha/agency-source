import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Introduction from './components/introduction';
import Service from './components/service';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import Product from './components/product';
import Contact from './components/contact';
import ScrollToTop from './scrollToTop';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false)
  const openSidebar = () => {
    setSidebar(true)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }
  return (
    <Router>
      <Navbar sidebar={sidebar} openSidebar={openSidebar} closeSidebar={closeSidebar} />
      <ScrollToTop closeSidebar={closeSidebar} />
      <Routes>
        <Route exact path="/Agency.page" element={<><Introduction /><Service /><Testimonials /></>}></Route>
        <Route exact path="/product/:id" element={<Product />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
