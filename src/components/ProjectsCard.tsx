import React from 'react';
import Image from 'next/image';

interface PropertyImage {
  src: string;
  alt: string;
}

const ProjectsCard: React.FC = () => {
  const propertyImages: PropertyImage[] = [
    { src: '/img/2e77b8e179c35fefcd51fe74f284a6c0.png', alt: 'Property 1' },
    { src: '/img/65747c3d11c9bbf5402f5a2f5a4de45a.jpeg', alt: 'Property 2' },
    { src: '/img/537cc256697d290adb7b82eeace75b04.png', alt: 'Property 3' },
    { src: '/img/2e77b8e179c35fefcd51fe74f284a6c0.png', alt: 'Property 4' },
    { src: '/img/737695c09945ed2efbc05bc01be39692.png', alt: 'Property 5' },
    { src: '/img/65747c3d11c9bbf5402f5a2f5a4de45a.jpeg', alt: 'Property 6' },
  ];

  return (
    <div
      className="h-full"
    >
      <div
        className={`bg-gray-900 rounded-lg p-6 relative overflow-hidden h-80 flex flex-col justify-end`}
      >
        <div className="absolute z-10 flex flex-col bottom-0 gap-0 h-28 ">
          <h2 className="text-white text-[80px]/20 font-[400] ">100+</h2>
          <p className="text-[15px] text-gray-300">projets immobiliers</p>
        </div>
        <div className="absolute right-2 top-7 h-42 w-full">
          {propertyImages.map((item: PropertyImage, index: number) => (
            <div
              key={index}
              className={`
                group absolute top-5 rounded-xl overflow-hidden shadow-lg 
                transition-all duration-400 hover:-translate-y-7 hover:z-50 
                w-36 h-36 sm:w-40 sm:h-32 
                -rotate-x-15 -rotate-y-52
              `}
              style={{
                zIndex: index,
                right: `${index * 13}%`,
              }}
            >
              {/* Black overlay */}
              <span className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300 z-10" />
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;