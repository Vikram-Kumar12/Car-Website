// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaCheckCircle, FaTimes } from 'react-icons/fa';

// const CarCard = ({ car }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState('');
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     city: '',
//     brand: car.brand,
//     model: car.model,
//     variant: 'medium',
//     budget: '',
//     timeline: '',
//     needLoan: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Prevent scrolling when modal is open
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isModalOpen]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsModalOpen(false);
//       setIsSubmitted(false);
//       // Reset form
//       setFormData({
//         fullName: '',
//         phone: '',
//         email: '',
//         city: '',
//         brand: car.brand,
//         model: car.model,
//         variant: 'medium',
//         budget: '',
//         timeline: '',
//         needLoan: '',
//         message: ''
//       });
//     }, 2000);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsSubmitted(false);
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition w-full max-w-sm mx-auto"
//       whileHover={{ scale: 1.02 }}
//     >
//       <img
//         src={car.image}
//         alt={car.name}
//         className="w-full h-48 sm:h-56 md:h-48 lg:h-56 xl:h-64 object-cover"
//       />
//       <div className="p-4 sm:p-6">
//         <div className="flex justify-between items-start">
//           <div>
//             <h3 className="text-lg sm:text-xl font-semibold">{car.name}</h3>
//             <p className="text-gray-600 text-sm sm:text-base">{car.brand} • {car.model}</p>
//           </div>
//           <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
//             {car.condition}
//           </span>
//         </div>

//         <div className="mt-4 flex justify-between items-center">
//           <span className="text-xl sm:text-2xl font-bold">₹{car.price.toLocaleString()}</span>
//           <div className="flex space-x-2">
//             <button
//               onClick={() => {
//                 setIsModalOpen(true);
//                 setModalType('details');
//               }}
//               className="px-3 sm:px-4 py-1 sm:py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition text-sm sm:text-base"
//             >
//               Details
//             </button>
//             <button
//               onClick={() => {
//                 setIsModalOpen(true);
//                 setModalType('book');
//               }}
//               className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm sm:text-base"
//             >
//               Book
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
//           >
//             <div className="relative p-6">
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//               >
//                 <FaTimes className="text-xl" />
//               </button>

//               {modalType === 'details' ? (
//                 <div className="space-y-6">
//                   <h3 className="text-2xl sm:text-3xl font-bold mb-4">Car Details</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     <div className="space-y-2">
//                       <img
//                         src={car.image}
//                         alt={car.name}
//                         className="w-full h-48 object-cover rounded-lg"
//                       />
//                       <h4 className="text-xl font-semibold">{car.name}</h4>
//                       <p className="text-blue-600 font-medium">₹{car.price.toLocaleString()}</p>
//                     </div>
//                     <div className="space-y-4">
//                       <div>
//                         <p className="font-semibold">Brand:</p>
//                         <p>{car.brand}</p>
//                       </div>
//                       <div>
//                         <p className="font-semibold">Model:</p>
//                         <p>{car.model}</p>
//                       </div>
//                       <div>
//                         <p className="font-semibold">Year:</p>
//                         <p>{car.year}</p>
//                       </div>
//                     </div>
//                     <div className="space-y-4">
//                       <div>
//                         <p className="font-semibold">Mileage:</p>
//                         <p>{car.mileage} kmpl</p>
//                       </div>
//                       <div>
//                         <p className="font-semibold">Transmission:</p>
//                         <p>{car.transmission}</p>
//                       </div>
//                       <div>
//                         <p className="font-semibold">Fuel Type:</p>
//                         <p>{car.fuelType}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-4">
//                     <button
//                       onClick={() => {
//                         setModalType('book');
//                       }}
//                       className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//                     >
//                       Book This Car
//                     </button>
//                   </div>
//                 </div>
//               ) : isSubmitted ? (
//                 <div className="text-center py-8">
//                   <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold text-green-600 mb-2">Booking Successful!</h3>
//                   <p className="text-gray-600">Our representative will contact you shortly.</p>
//                 </div>
//               ) : (
//                 <div className="space-y-6">
//                   <h3 className="text-2xl sm:text-3xl font-bold mb-4">Book This Car</h3>
//                   <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block mb-2 font-medium">Full Name *</label>
//                       <input
//                         type="text"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-medium">Phone Number *</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-medium">Email *</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-medium">City *</label>
//                       <input
//                         type="text"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-medium">Brand *</label>
//                       <input
//                         type="text"
//                         name="brand"
//                         value={formData.brand}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded bg-gray-100"
//                         readOnly
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-medium">Model *</label>
//                       <input
//                         type="text"
//                         name="model"
//                         value={formData.model}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded bg-gray-100"
//                         readOnly
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-medium">Variant</label>
//                       <select
//                         name="variant"
//                         value={formData.variant}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded"
//                       >
//                         <option value="low">Low</option>
//                         <option value="medium">Medium</option>
//                         <option value="top">Top</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-medium">Budget Range</label>
//                       <input
//                         type="text"
//                         name="budget"
//                         value={formData.budget}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded"
//                         placeholder="e.g., ₹5-10 Lakhs"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-medium">When do you plan to buy?</label>
//                       <select
//                         name="timeline"
//                         value={formData.timeline}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded"
//                       >
//                         <option value="">Select</option>
//                         <option value="immediately">Immediately</option>
//                         <option value="1-month">Within 1 Month</option>
//                         <option value="3-months">Within 3 Months</option>
//                         <option value="just-exploring">Just Exploring</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-medium">Do you need a loan?</label>
//                       <select
//                         name="needLoan"
//                         value={formData.needLoan}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded"
//                       >
//                         <option value="">Select</option>
//                         <option value="yes">Yes</option>
//                         <option value="no">No</option>
//                       </select>
//                     </div>
//                     <div className="sm:col-span-2">
//                       <label className="block mb-2 font-medium">Additional Message</label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border rounded"
//                         rows="3"
//                       ></textarea>
//                     </div>
//                     <div className="sm:col-span-2">
//                       <button
//                         type="submit"
//                         className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium"
//                       >
//                         Submit Booking Request
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       )}

//     </motion.div>
//   );
// };

// export default CarCard;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    brand: car.brand,
    model: car.model,
    variant: "medium",
    budget: "",
    timeline: "",
    needLoan: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        brand: car.brand,
        model: car.model,
        variant: "medium",
        budget: "",
        timeline: "",
        needLoan: "",
        message: "",
      });
    }, 2000);
  };

  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition w-full max-w-sm mx-auto"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 sm:h-56 md:h-48 lg:h-56 xl:h-64 object-cover"
        />
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {car.brand} • {car.model}
              </p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              {car.condition}
            </span>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl sm:text-2xl font-bold">
              ₹{car.price.toLocaleString()}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => openModal("details")}
                className="px-3 sm:px-4 py-1 sm:py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition text-sm sm:text-base"
              >
                Details
              </button>
              <button
                onClick={() => openModal("book")}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Large Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <FaTimes className="text-xl" />
              </button>

              <div className="p-6">
                {modalType === "details" ? (
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      Car Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <h4 className="text-xl font-semibold">{car.name}</h4>
                        <p className="text-blue-600 font-medium">
                          ₹{car.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold">Brand:</p>
                          <p>{car.brand}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Model:</p>
                          <p>{car.model}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Year:</p>
                          <p>{car.year}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold">Mileage:</p>
                          <p>{car.mileage} kmpl</p>
                        </div>
                        <div>
                          <p className="font-semibold">Transmission:</p>
                          <p>{car.transmission}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Fuel Type:</p>
                          <p>{car.fuelType}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => setModalType("book")}
                        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      >
                        Book This Car
                      </button>
                    </div>
                  </div>
                ) : isSubmitted ? (
                  <div className="text-center py-8">
                    <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Booking Successful!
                    </h3>
                    <p className="text-gray-600">
                      Our representative will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      Book This Car
                    </h3>
                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                      {/* Modal */}
                      {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                          >
                            <div className="relative p-6">
                              <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                              >
                                <FaTimes className="text-xl" />
                              </button>

                              {modalType === "details" ? (
                                <div className="space-y-6">
                                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                    Car Details
                                  </h3>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                      <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-48 object-cover rounded-lg"
                                      />
                                      <h4 className="text-xl font-semibold">
                                        {car.name}
                                      </h4>
                                      <p className="text-blue-600 font-medium">
                                        ₹{car.price.toLocaleString()}
                                      </p>
                                    </div>
                                    <div className="space-y-4">
                                      <div>
                                        <p className="font-semibold">Brand:</p>
                                        <p>{car.brand}</p>
                                      </div>
                                      <div>
                                        <p className="font-semibold">Model:</p>
                                        <p>{car.model}</p>
                                      </div>
                                      <div>
                                        <p className="font-semibold">Year:</p>
                                        <p>{car.year}</p>
                                      </div>
                                    </div>
                                    <div className="space-y-4">
                                      <div>
                                        <p className="font-semibold">
                                          Mileage:
                                        </p>
                                        <p>{car.mileage} kmpl</p>
                                      </div>
                                      <div>
                                        <p className="font-semibold">
                                          Transmission:
                                        </p>
                                        <p>{car.transmission}</p>
                                      </div>
                                      <div>
                                        <p className="font-semibold">
                                          Fuel Type:
                                        </p>
                                        <p>{car.fuelType}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="pt-4">
                                    <button
                                      onClick={() => {
                                        setModalType("book");
                                      }}
                                      className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                    >
                                      Book This Car
                                    </button>
                                  </div>
                                </div>
                              ) : isSubmitted ? (
                                <div className="text-center py-8">
                                  <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                                    Booking Successful!
                                  </h3>
                                  <p className="text-gray-600">
                                    Our representative will contact you shortly.
                                  </p>
                                </div>
                              ) : (
                                <div className="space-y-6">
                                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                    Book This Car
                                  </h3>
                                  <form
                                    onSubmit={handleSubmit}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                                  >
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        Full Name *
                                      </label>
                                      <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        Phone Number *
                                      </label>
                                      <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        Email *
                                      </label>
                                      <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        City *
                                      </label>
                                      <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        Brand *
                                      </label>
                                      <input
                                        type="text"
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded bg-gray-100"
                                        readOnly
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        Model *
                                      </label>
                                      <input
                                        type="text"
                                        name="model"
                                        value={formData.model}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded bg-gray-100"
                                        readOnly
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        Variant
                                      </label>
                                      <select
                                        name="variant"
                                        value={formData.variant}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded"
                                      >
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="top">Top</option>
                                      </select>
                                    </div>
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        Budget Range
                                      </label>
                                      <input
                                        type="text"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded"
                                        placeholder="e.g., ₹5-10 Lakhs"
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        When do you plan to buy?
                                      </label>
                                      <select
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded"
                                      >
                                        <option value="">Select</option>
                                        <option value="immediately">
                                          Immediately
                                        </option>
                                        <option value="1-month">
                                          Within 1 Month
                                        </option>
                                        <option value="3-months">
                                          Within 3 Months
                                        </option>
                                        <option value="just-exploring">
                                          Just Exploring
                                        </option>
                                      </select>
                                    </div>
                                    <div>
                                      <label className="block mb-2 font-medium">
                                        Do you need a loan?
                                      </label>
                                      <select
                                        name="needLoan"
                                        value={formData.needLoan}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded"
                                      >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                      </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                      <label className="block mb-2 font-medium">
                                        Additional Message
                                      </label>
                                      <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                    <div className="sm:col-span-2">
                                      <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium"
                                      >
                                        Submit Booking Request
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CarCard;
