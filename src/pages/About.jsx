import { motion } from 'framer-motion';
import { FaCarSide, FaMedal, FaShieldAlt, FaSearch, FaHeadset } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import Consultation from '../components/Consultation';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="bg-white py-20 px-5 sm:px-10">

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div 
            variants={item}
            className="w-full lg:w-1/2 h-96 relative rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.pexels.com/photos/3825271/pexels-photo-3825271.jpeg" 
              alt="Luxury Car Showroom"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={item} className="w-full lg:w-1/2 space-y-8">
            <motion.h2 
              variants={item}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              About <span className="text-blue-600">LuxCars</span>
            </motion.h2>

            <motion.p variants={item} className="text-lg text-gray-600">
              Welcome to LuxCars - your premier destination for exploring the world's finest luxury automobiles. Our platform revolutionizes how enthusiasts discover, compare, and connect with high-end vehicles.
            </motion.p>

            <motion.div variants={container} className="space-y-6">
              {/* Why LuxCars Section */}
              <motion.div variants={item} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <FaCarSide className="text-blue-500" /> Why LuxCars Exists
                </h3>
                <p className="text-gray-600">
                  We created LuxCars to simplify the luxury car buying experience. Traditional showrooms can be intimidating - we provide a transparent, user-friendly platform where you can explore premium vehicles at your own pace with detailed information and virtual experiences.
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div variants={item}>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">What Makes Us Different</h3>
                <ul className="space-y-4">
                  <motion.li variants={item} className="flex items-start gap-3">
                    <FaMedal className="text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Curated selection of only premium, certified luxury vehicles</span>
                  </motion.li>
                  <motion.li variants={item} className="flex items-start gap-3">
                    <FaShieldAlt className="text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Verified listings with complete vehicle history reports</span>
                  </motion.li>
                  <motion.li variants={item} className="flex items-start gap-3">
                    <FaSearch className="text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Advanced filtering to find your perfect match</span>
                  </motion.li>
                  <motion.li variants={item} className="flex items-start gap-3">
                    <FaHeadset className="text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">24/7 concierge service for personalized assistance</span>
                  </motion.li>
                </ul>
              </motion.div>

              {/* Benefits Section */}
              <motion.div variants={item} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Your Benefits</h3>
                <p className="text-gray-600 mb-3">
                  When you use LuxCars, you gain access to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Time savings with our efficient search and comparison tools</li>
                  <li>Confidence through transparent pricing and vehicle histories</li>
                  <li>Exclusive access to rare and limited-edition models</li>
                  <li>Virtual test drives and augmented reality previews</li>
                  <li>White-glove delivery options worldwide</li>
                </ul>
              </motion.div>

            </motion.div>

          </motion.div>

        </motion.div>
      </div>

      <div className='mt-20 rounded-full '><Consultation/></div>

    </section>
  );
};

export default About;