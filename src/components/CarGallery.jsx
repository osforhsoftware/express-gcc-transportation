import React, { useState } from 'react';

export default function CarGallery({ images = [], carName = '' }) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  // Keep selected image in sync if images change
  React.useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start">
      {/* Main Large Vehicle Image (Matches Screenshot 2 & 10) */}
      <div className="w-full lg:flex-1 relative bg-white rounded-2xl overflow-hidden border border-gray-200/90 aspect-[16/9] shadow-sm flex items-center justify-center">
        <img
          src={selectedImage}
          alt={carName}
          className="w-full h-full object-contain md:object-cover transition-opacity duration-300"
        />
        
        {/* Subtle vehicle category or indicator badge */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
          Official Vehicle Image
        </div>
      </div>

      {/* Vertical Thumbnail Gallery Beside Main Image (Matches Screenshot 2) */}
      <div className="flex lg:flex-col gap-3 w-full lg:w-28 shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
        {images.map((imgUrl, index) => {
          const isActive = selectedImage === imgUrl;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(imgUrl)}
              className={`relative rounded-xl overflow-hidden aspect-[4/3] w-24 lg:w-full shrink-0 border-2 transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'border-[#ff3600] ring-2 ring-[#ff3600]/30 shadow-md scale-[1.02]'
                  : 'border-gray-200 hover:border-gray-400 opacity-80 hover:opacity-100'
              }`}
              aria-label={`Select angle ${index + 1} for ${carName}`}
            >
              <img
                src={imgUrl}
                alt={`${carName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

