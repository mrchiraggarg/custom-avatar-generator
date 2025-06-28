import React from 'react';

interface FaceProps {
  shape: string;
  skinColor: string;
  className?: string;
}

export const Face: React.FC<FaceProps> = ({ shape, skinColor, className = '' }) => {
  const getFacePath = () => {
    switch (shape) {
      case 'oval':
        return 'M60 40 C80 40, 90 60, 90 80 C90 100, 80 120, 60 120 C40 120, 30 100, 30 80 C30 60, 40 40, 60 40 Z';
      case 'square':
        return 'M40 45 L80 45 C85 45, 85 50, 85 55 L85 105 C85 110, 80 115, 75 115 L45 115 C40 115, 35 110, 35 105 L35 55 C35 50, 40 45, 40 45 Z';
      default: // round
        return 'M60 35 C80 35, 95 50, 95 80 C95 110, 80 125, 60 125 C40 125, 25 110, 25 80 C25 50, 40 35, 60 35 Z';
    }
  };

  return (
    <path
      d={getFacePath()}
      fill={skinColor}
      stroke="#E0E0E0"
      strokeWidth="1"
      className={className}
    />
  );
};