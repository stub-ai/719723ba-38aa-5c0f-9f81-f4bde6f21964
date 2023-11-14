import React from 'react';

interface ImageWithTooltipProps {
  src: string;
  alt: string;
  tooltip: string;
}

const ImageWithTooltip: React.FC<ImageWithTooltipProps> = ({ src, alt, tooltip }) => {
  return (
    <div className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 m-4">
      <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-lg" />
      <div className="absolute bottom-0 left-0 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-b-lg">
        {tooltip}
      </div>
    </div>
  );
};

export default ImageWithTooltip;