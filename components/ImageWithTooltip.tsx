import React from 'react';

interface ImageWithTooltipProps {
  src: string;
  alt: string;
  tooltip: string;
}

const ImageWithTooltip: React.FC<ImageWithTooltipProps> = ({ src, alt, tooltip }) => {
  return (
    <div className="relative group">
      <img src={src} alt={alt} className="w-full h-auto" />
      <div className="absolute bottom-0 left-0 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2">
        {tooltip}
      </div>
    </div>
  );
};

export default ImageWithTooltip;