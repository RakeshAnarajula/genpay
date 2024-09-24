import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Feature from './Components/Feature';
import Whygenpay from './Components/Whygenpay';
import Reward from './Components/Reward';
import Footer from './Components/Footer';
import Parent from './pages/Parent';
import Teens from './pages/Teens';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Feature />
              <Whygenpay />
              <Reward />
              <Footer />
            </>
          } />
          <Route path="/parent" element={<Parent />} />
          <Route path="/teens" element={<Teens />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

