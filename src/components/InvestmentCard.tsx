import React from 'react';

const InvestmentCard: React.FC = () => {
  return (
    <div
      className={`bg-linear-to-r from-[#ea6c3f] to-[#ff9244] rounded-lg p-6 relative overflow-hidden h-48 flex flex-col justify-end`}
    >
      <div className="relative z-10">
        <h2 className="text-white text-5xl font-medium mb-1">112932202</h2>
        <p className="text-gray-300 text-xs">euros investis</p>
      </div>
    </div>
  );
};

export default InvestmentCard;