import Hero from '../components/Hero';
import QuickActions from '../components/QuickActions';
import CarListings from '../components/CarListings';
import Partners from '../components/Partners';
import BestSellers from '../components/BestSellers';
import BankPartners from '../components/BankPartners';
import Reviews from '../components/Reviews';
import CIBILSection from '../components/CIBILSection';
import Consultation from '../components/Consultation';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Carousel */}
      <Hero />

      {/* Quick Action Cards */}
      {/* <QuickActions /> */}

      {/* Car Listings with Filters */}
      <CarListings />

      {/* Partner Brands */}
      <Partners />

      {/* Best Selling Cars */}
      <BestSellers />

      {/* Bank Partners */}
      <BankPartners />

      {/* Customer Reviews */}
      <Reviews />

      {/* CIBIL Score Check */}
      <CIBILSection />

      {/* Free Consultation */}
      <Consultation />
    </div>
  );
};

export default Home;