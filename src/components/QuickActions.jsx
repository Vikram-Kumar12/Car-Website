import { quickActions } from "../constants";
import { motion } from "framer-motion";

const QuickActions = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Actions</h2>
        <div className="flex justify-center">
          {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6*/}
          <div className="">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-blue-600 text-4xl mb-4">{action.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
