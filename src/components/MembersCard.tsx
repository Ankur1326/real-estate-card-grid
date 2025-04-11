import React from 'react';
import Image from 'next/image';

interface ImageData {
  top: string;
  left?: string;
  right?: string;
  size: string;
  delay: string;
  imgUrl: string;
  rotate: string;
}

const MembersCard: React.FC = () => {
  const imageData: ImageData[] = [
    { top: '-7%', left: '2%', size: 'w-14 h-14', delay: '0s', imgUrl: "/img/profile-avatar/avatar1.jpg", rotate: "-rotate-45" },
    { top: '-6%', left: '20%', size: 'w-10 h-10', delay: '0.1s', imgUrl: "/img/profile-avatar/avatar2.jpeg", rotate: "-rotate-40" },
    { top: '35%', left: '-2%', size: 'w-14 h-14', delay: '0.8s', imgUrl: "/img/profile-avatar/avatar4.jpeg", rotate: "-rotate-90" },
    { top: '20%', left: '15%', size: 'w-10 h-10', delay: '1.0s', imgUrl: "/img/profile-avatar/avatar3.jpeg", rotate: "-rotate-90" },
    { top: '55%', left: '15%', size: 'w-10 h-10', delay: '1.1s', imgUrl: "/img/profile-avatar/avatar5.jpeg", rotate: "-rotate-120" },
    { top: '90%', left: '3%', size: 'w-16 h-16', delay: '0.2s', imgUrl: "/img/profile-avatar/avatar6.jpeg", rotate: "-rotate-130" },
    { top: '93%', left: '20%', size: 'w-10 h-10', delay: '0.3s', imgUrl: "/img/profile-avatar/avatar7.jpeg", rotate: "-rotate-130" },

    { top: '-20%', right: '2%', size: 'w-14 h-14', delay: '0s', imgUrl: "/img/profile-avatar/avatar1.jpg", rotate: "rotate-45" },
    { top: '-15%', right: '20%', size: 'w-10 h-10', delay: '0.1s', imgUrl: "/img/profile-avatar/avatar2.jpeg", rotate: "rotate-40" },
    { top: '35%', right: '-2%', size: 'w-14 h-14', delay: '0.8s', imgUrl: "/img/profile-avatar/avatar4.jpeg", rotate: "rotate-90" },
    { top: '55%', right: '15%', size: 'w-10 h-10', delay: '1.1s', imgUrl: "/img/profile-avatar/avatar3.jpeg", rotate: "rotate-100" },
    { top: '15%', right: '15%', size: 'w-10 h-10', delay: '1.0s', imgUrl: "/img/profile-avatar/avatar5.jpeg", rotate: "rotate-60" },
    { top: '80%', right: '3%', size: 'w-16 h-16', delay: '0.2s', imgUrl: "/img/profile-avatar/avatar6.jpeg", rotate: "rotate-130" },
    { top: '85%', right: '20%', size: 'w-10 h-10', delay: '0.3s', imgUrl: "/img/profile-avatar/avatar7.jpeg", rotate: "rotate-130" },
  ];

  type MobileImageStyle = {
    top: string;
    left?: string;
    right?: string;
  };

  return (
    <div className="bg-gray-900 rounded-lg relative overflow-hidden h-48 flex flex-col justify-end border">

      {/* Central content */}
      <div className="z-10 text-center -translate-y-13">
        <h2 className="text-white text-5xl font-medium">400k+</h2>
        <p className="text-gray-300 text-xs">membres Bricks</p>
      </div>

      {/* Avatar circles */}
      {imageData.map((item: ImageData, index: number) => (
        <div
          key={index}
          className={`absolute ${item.size} ${item.rotate} rounded-full overflow-hidden shadow-md hover:scale-110 transition-transform duration-300 hidden sm:block`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            transitionDelay: item.delay
          }}
        >
          <Image
            src={item.imgUrl}
            alt={`Member ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}

      {/* Fewer avatars for mobile */}
      {imageData.slice(0, 6).map((item, index) => {
        // Adjust positions for mobile
        const mobilePositions: MobileImageStyle[] = [
          { top: '15%', left: '10%' },
          { top: '25%', right: '10%' },
          { top: '65%', left: '10%' },
          { top: '75%', right: '10%' },
          { top: '35%', left: '10%' },
          { top: '45%', right: '10%' },
        ];

        const position = mobilePositions[index];

        return (
          <div
            key={`mobile-${index}`}
            className={`absolute ${item.rotate} w-10 h-10 rounded-full overflow-hidden shadow-md hover:scale-110 transition-transform duration-300 block sm:hidden`}
            style={position}
          >
            <Image
              src={item.imgUrl}
              alt={`Member ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MembersCard;