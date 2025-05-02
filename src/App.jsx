import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/common/LoadingSpinner";
import AllAvailableCars from "./components/AllAvailableCars";
import AllSellingCars from "./components/AllSellingCars";
import Services from "./components/Services";
import Consults from "./components/Consults";
import AllBrandsDetails from "./components/BrandsComponnets/AllBrandsDetails";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services/>}/>
              <Route path="/consult" element={<Consults/>}/>
              <Route path="/allAvailableCars" element={<AllAvailableCars/>}/>

               {/* brands : */}
               <Route path="/brands/:id" element={<AllBrandsDetails/>} />

              <Route path="/all-Sellings-Cars" element={<AllSellingCars/>}/>
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
