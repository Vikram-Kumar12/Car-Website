// import { reviews } from '../constants';
// import { motion } from 'framer-motion';

// const Reviews = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviews.map((review, index) => (
//             <motion.div
//               key={review.id}
//               className="bg-white p-6 rounded-xl shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
//                   {review.name.charAt(0)}
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="font-semibold">{review.name}</h3>
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600">"{review.comment}"</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;


import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quote:
      "The team at LuxCars made my dream of owning a Porsche a reality. Their professionalism and attention to detail were outstanding.",
    author: "Michael Johnson",
    role: "Entrepreneur",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    quote:
      "I've purchased several vehicles from LuxCars over the years and they consistently deliver exceptional service and quality vehicles.",
    author: "Sarah Williams",
    role: "CEO, TechStart",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    quote:
      "The buying process was seamless and enjoyable. The staff was knowledgeable and helped me find the perfect Mercedes for my needs.",
    author: "David Chen",
    role: "Investment Banker",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: 4,
    quote:
      "LuxCars exceeded all my expectations. The after-sales service is just as impressive as the initial purchase experience.",
    author: "Emily Rodriguez",
    role: "Physician",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    id: 5,
    quote:
      "From the test drive to the paperwork, everything was handled with such care. I love my new Range Rover!",
    author: "James Patel",
    role: "Software Engineer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 6,
    quote:
      "The best car buying experience I've ever had. No pressure, just genuine support and quality cars.",
    author: "Anna Kim",
    role: "Marketing Director",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 7,
    quote:
      "Highly recommend LuxCars to anyone looking for luxury cars with top-notch customer service.",
    author: "Robert Green",
    role: "Real Estate Agent",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 8,
    quote:
      "I never imagined buying a car could be so smooth and enjoyable. LuxCars has earned a loyal customer.",
    author: "Priya Nair",
    role: "UX Designer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 9,
    quote:
      "The staff genuinely care about customer satisfaction. I'm extremely happy with my new Audi.",
    author: "Carlos Alvarez",
    role: "Architect",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    id: 10,
    quote:
      "I was nervous about buying a luxury car, but LuxCars made the process stress-free and even exciting!",
    author: "Lena Müller",
    role: "Fashion Designer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why our clients choose LuxCars for their luxury automotive
            needs
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            // Add these new parameters
            loop={true}
            loopAdditionalSlides={1}
            slidesPerView={1}
            speed={800}
            effect={"slide"}
            slideToClickedSlide={true}
            // onSlideChange={() => console.log("slide change")}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, x: 100 }} // Start from right
                  whileInView={{ opacity: 1, x: 0 }} // Move to center
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;