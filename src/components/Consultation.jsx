import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);

const Consultation = () => {
  return (
    <section className="py-12 bg-blue-600 text-black rounded-lg ml-2 mr-2 mb-5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
        <p className="text-xl mb-6">
          Get free consultation from our car experts
        </p>

        <MotionLink
          to="/consult"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-all duration-300"
        >
          Book Free Consultation
        </MotionLink>
      </div>
    </section>
  );
};

export default Consultation;
