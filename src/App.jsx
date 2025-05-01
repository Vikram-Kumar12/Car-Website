import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/common/LoadingSpinner";
import AllAvailableCars from "./components/AllAvailableCars";

import Hyundai from "./components/BrandsComponnets/Hyundai";
import Toyota from "./components/BrandsComponnets/Toyota";
import Honda from "./components/BrandsComponnets/Honda";
import BMW from "./components/BrandsComponnets/BMW";
import MercedesBenz from "./components/BrandsComponnets/MercedesBenz";
import Audi from "./components/BrandsComponnets/Audi";
import Kia from "./components/BrandsComponnets/Kia";
import Tata from "./components/BrandsComponnets/Tata";
import Tesla from "./components/BrandsComponnets/Tesla";
import Volkswagen from "./components/BrandsComponnets/Volkswagen";
import AllSellingCars from "./components/AllSellingCars";
import Services from "./components/Services";
import Consults from "./components/Consults";

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
              <Route path="/brands/:id" element={<Hyundai />} />
              <Route path="/brands/:id" element={<Toyota/>} />
              <Route path="/brands/:id" element={<Honda />} />
              <Route path="/brands/:id" element={<BMW />} />
              <Route path="/brands/:id" element={<MercedesBenz />} />
              <Route path="/brands/:id" element={<Audi />} />
              <Route path="/brands/:id" element={<Kia />} />
              <Route path="/brands/:id" element={<Tata />} />
              <Route path="/brands/:id" element={<Tesla />} />
              <Route path="/brands/:id" element={<Volkswagen />} />

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
