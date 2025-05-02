import { useState, useEffect, useRef } from "react";
import { bankPartners } from "../constants";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BankPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllBanks, setShowAllBanks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const banksPerView = 5;
  const totalBanks = bankPartners.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || showAllBanks) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 4;
    let scrollPosition = 0;
    const bankWidth = 180; // Adjusted for your bank card width

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= bankWidth * totalBanks) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, [isMobile, showAllBanks, totalBanks]);

  const nextBanks = () => {
    setCurrentIndex((prevIndex) => (prevIndex + banksPerView) % totalBanks);
  };

  const prevBanks = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - banksPerView + totalBanks) % totalBanks
    );
  };

  const visibleBanks = [];
  for (let i = 0; i < banksPerView; i++) {
    const bankIndex = (currentIndex + i) % totalBanks;
    visibleBanks.push(bankPartners[bankIndex]);
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Partner Banks</h2>

        {/* Mobile/Tablet View - Auto-scrolling */}
        {isMobile && !showAllBanks && (
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 15, // 🔁 speed: lower = faster
                  ease: "linear",
                },
              }}
            >
              {[...bankPartners, ...bankPartners].map((bank, index) => (
                <motion.div
                  key={`mobile-${bank.id}-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center flex-shrink-0"
                  style={{ width: "180px", height: "180px" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="h-12 mb-3 w-full object-contain"
                  />
                  <h3 className="font-semibold text-center text-sm ">{bank.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 text-center">
                    Interest: {bank.interestRate}%
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Desktop View */}
        {!isMobile && !showAllBanks && (
          <div className="flex items-center justify-center gap-4 ">
            <button
              onClick={prevBanks}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Previous banks"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-6 w-full  ">
              {visibleBanks.map((bank, index) => (
                <motion.div
                  key={`desktop-${bank.id}-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                  style={{
                    width: "180px",
                    height: "180px",
                    flex: "0 0 auto",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="h-12 mb-3 w-full object-contain"
                  />
                  <h3 className="font-semibold text-center text-sm">{bank.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 text-center">
                    Interest: {bank.interestRate}%
                  </p>
                </motion.div>
              ))}
            </div>

            <button
              onClick={nextBanks}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Next banks"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* View All/Less Banks Toggle */}
        {bankPartners.length > banksPerView && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllBanks(!showAllBanks)}
              className="text-blue-600 font-medium hover:underline"
            >
              {showAllBanks ? "Show Less" : "View All Banks"}
            </button>
          </div>
        )}

        {/* All Banks Expanded View */}
        {showAllBanks && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 2 }}
            className="mt-8"
          >
            <div
              className={`flex flex-wrap justify-center gap-4 py-5  ${
                isMobile ? "px-4" : ""
              }`}
            >
              {bankPartners.map((bank) => (
                <motion.div
                  key={`all-${bank.id}`}
                  className="bg-white mt-2 rounded-lg shadow-md flex flex-col items-center"
                  style={{
                    width: "150px",
                    height: "180px",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="h-12 mb-3 w-full object-contain"
                  />
                  <h3 className="font-semibold text-center text-sm">{bank.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 text-center">
                    Interest: {bank.interestRate}%
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BankPartners;
