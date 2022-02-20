import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ServicesPage from './pages/services/ServicesPage';
import PricingPage from './pages/pricing/PricingPage';
import AboutPage from './pages/about/AboutPage';
import BookingPage from './pages/booking/BookingPage';
import ContactPage from './pages/contact/ContactPage';
import ServiceSpecific from './pages/services/ServiceSpecific/ServiceSpecific';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route exact path={'/'} element={<HomePage />} />
        <Route exact path={'/services'} element={<ServicesPage />} />
        <Route exact path={'/services/:serviceLink'} element={<ServiceSpecific />} />
        <Route exact path={'/pricing'} element={<PricingPage />} />
        <Route exact path={'/about'} element={<AboutPage />} />
        <Route exact path={'/booking'} element={<BookingPage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
