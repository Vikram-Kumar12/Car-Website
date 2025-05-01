import { useState, useEffect, useRef } from 'react';
import { partnerBrands } from '../constants';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const brandsPerView = 5;
  const totalBrands = partnerBrands.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || showAllBrands) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 4;
    let scrollPosition = 0;
    const brandWidth = 160;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= brandWidth * totalBrands) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, [isMobile, showAllBrands, totalBrands]);

  const nextBrands = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + brandsPerView) % totalBrands
    );
  };

  const prevBrands = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - brandsPerView + totalBrands) % totalBrands
    );
  };

  const visibleBrands = [];
  for (let i = 0; i < brandsPerView; i++) {
    const brandIndex = (currentIndex + i) % totalBrands;
    visibleBrands.push(partnerBrands[brandIndex]);
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular brands</h2>
        
        {/* Mobile/Tablet View */}
        {isMobile && !showAllBrands && (
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden gap-8 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {[...partnerBrands, ...partnerBrands].map((brand, index) => (
              <Link to={`/brands/${brand.id}`} key={`mobile-${brand.id}-${index}`}>
                <motion.div
                  className="bg-white p-4 rounded-lg shadow-md flex-shrink-0"
                  style={{ width: '160px' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-12 w-full object-contain" 
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        )}

        {/* Desktop View */}
        {!isMobile && !showAllBrands && (
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prevBrands}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Previous brands"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center gap-8 w-full max-w-4xl overflow-hidden">
              {visibleBrands.map((brand, index) => (
                <Link to={`/brands/${brand.id}`} key={`desktop-${brand.id}-${index}`}>
                  <motion.div
                    className="bg-white p-4 rounded-lg shadow-md flex-shrink-0"
                    style={{ width: 'calc(20% - 32px)', minWidth: '160px' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-12 w-full object-contain" 
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
            
            <button 
              onClick={nextBrands}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Next brands"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* View All/Less Brands Toggle */}
        <div className="text-center mt-8">
          <button 
            onClick={() => setShowAllBrands(!showAllBrands)}
            className="text-blue-600 font-medium hover:underline"
          >
            {showAllBrands ? 'Less Brands' : 'View All Brands'}
          </button>
        </div>

        {/* All Brands Expanded View */}
        {showAllBrands && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 5 }}
            className="mt-8"
          >
            <div className={`flex flex-wrap justify-center gap-6 ${
              isMobile ? 'px-4' : ''
            }`}>
              {partnerBrands.map((brand) => (
                <Link to={`/brands/${brand.id}`} key={`all-${brand.id}`}>
                  <motion.div
                    className="bg-white p-4 rounded-lg shadow-md"
                    style={{ width: '160px' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-12 w-full object-contain" 
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
        
      </div>
    </section>
  );
};

export default Partners;