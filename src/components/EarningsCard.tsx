import React from 'react';

interface BackgroundStyle {
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundClip: string;
}

const EarningsCard: React.FC = () => {
  const backgroundStyle: BackgroundStyle = {
    backgroundImage: 'url("/img/coins-background.png")',
    backgroundSize: 'auto 280%',
    backgroundPosition: '52% 42%',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'padding-box',
  };

  return (
    <div
      className={`bg-gray-800 rounded-lg p-6 relative overflow-hidden h-80 flex flex-col justify-end`}
    >
      <div className="relative z-10">
        <h2 className="text-white text-5xl font-medium mb-1">3 231 791</h2>
        <p className="text-gray-300 text-xs">euros perçus</p>
      </div>
      <div className="absolute inset-0 overflow-hidden opacity-60"
        style={backgroundStyle}
      >
      </div>
    </div>
  );
};

export default EarningsCard;