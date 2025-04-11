import React from 'react';
import Image from 'next/image';

interface PropertyImage {
  src: string;
  alt: string;
}

const ProjectsCard: React.FC = () => {
  const propertyImages: PropertyImage[] = [
    { src: '/img/brian-wangenheim-AP9XhEne8m4-unsplash.jpg', alt: 'Property 1' },
    { src: '/img/brian-wangenheim-esx_MLBNOEI-unsplash.jpg', alt: 'Property 2' },
    { src: '/img/brian-wangenheim-j3l5s6TrEi8-unsplash.jpg', alt: 'Property 3' },
    { src: '/img/jennifer-grismer-xkTqGWLtJh4-unsplash.jpg', alt: 'Property 4' },
    { src: '/img/julia-rodriguez-IR1EeDnrU10-unsplash.jpg', alt: 'Property 5' },
    { src: '/img/mike-petrucci-18joWFjUhKw-unsplash.jpg', alt: 'Property 6' },
  ];


  return (
    <div
      className="h-full"
    >
      <div
        className={`bg-gray-900 rounded-lg p-6 relative overflow-hidden h-72 flex flex-col justify-end`}
      >
        <div className="absolute z-10">
          <h2 className="text-white text-5xl font-light mb-1">100+</h2>
          <p className="text-xs text-gray-300">projets immobiliers</p>
        </div>
        <div className="absolute right-1 top-4 h-42 w-full">
          <span className='absolute z-40 inset-0 bg-[#00000077]'></span>
          {propertyImages.map((item: PropertyImage, index: number) => (
            <div
              key={index}
              className={`absolute top-5 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 w-32 h-32 sm:w-36 sm:h-32 -rotate-x-15 -rotate-y-50`}
              style={{
                zIndex: index,
                right: `${index * 13}%`,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover', right: `${index * 6}` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;