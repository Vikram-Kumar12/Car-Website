import { useState } from 'react';
import Modal from './common/Modal';

const CIBILSection = () => {
  const [pan, setPan] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(null);

  const handleCheckCIBIL = async (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setScore(Math.floor(Math.random() * 300) + 600); // Random score 600-900
      setIsModalOpen(true);
    }, 1000);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Check Your CIBIL Score</h2>
          <p className="mb-6">Get instant access to your credit score before applying for car loans</p>
          
          <form onSubmit={handleCheckCIBIL} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter PAN Number"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="flex-grow p-3 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Check Score
            </button>
          </form>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">Your CIBIL Score</h3>
            <div className="w-40 h-40 mx-auto rounded-full border-8 border-blue-100 flex items-center justify-center mb-6">
              <span className="text-4xl font-bold">{score}</span>
            </div>
            <p className="text-gray-600 mb-6">
              {score >= 750 ? 'Excellent! You qualify for best loan rates.' :
               score >= 650 ? 'Good score. You may get approved for loans.' :
               'Consider improving your score for better offers.'}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default CIBILSection;