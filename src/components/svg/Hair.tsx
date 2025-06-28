import React from 'react';

interface HairProps {
  type: string;
  hairColor: string;
  className?: string;
}

export const Hair: React.FC<HairProps> = ({ type, hairColor, className = '' }) => {
  if (type === 'none') return null;

  const renderHair = () => {
    switch (type) {
      case 'long':
        return (
          <g className={className}>
            <path d="M25 80 C25 45, 40 30, 60 30 C80 30, 95 45, 95 80 L95 120 C95 125, 90 130, 85 130 L35 130 C30 130, 25 125, 25 120 Z" fill={hairColor} />
            <path d="M20 85 C20 90, 25 95, 30 95 L30 125 C30 130, 25 135, 20 135 C15 135, 10 130, 10 125 L10 90 C10 87, 15 85, 20 85 Z" fill={hairColor} />
            <path d="M100 85 C105 85, 110 87, 110 90 L110 125 C110 130, 105 135, 100 135 C95 135, 90 130, 90 125 L90 95 C95 95, 100 90, 100 85 Z" fill={hairColor} />
          </g>
        );
      case 'curly':
        return (
          <g className={className}>
            <circle cx="45" cy="40" r="12" fill={hairColor} />
            <circle cx="60" cy="35" r="15" fill={hairColor} />
            <circle cx="75" cy="40" r="12" fill={hairColor} />
            <circle cx="35" cy="55" r="10" fill={hairColor} />
            <circle cx="85" cy="55" r="10" fill={hairColor} />
            <circle cx="30" cy="70" r="8" fill={hairColor} />
            <circle cx="90" cy="70" r="8" fill={hairColor} />
          </g>
        );
      case 'bun':
        return (
          <g className={className}>
            <path d="M30 75 C30 50, 45 35, 60 35 C75 35, 90 50, 90 75" fill={hairColor} />
            <circle cx="60" cy="25" r="15" fill={hairColor} />
            <circle cx="60" cy="25" r="12" fill={hairColor} opacity="0.8" />
          </g>
        );
      default: // short
        return (
          <path
            d="M30 75 C30 50, 45 35, 60 35 C75 35, 90 50, 90 75 C90 78, 88 80, 85 80 L35 80 C32 80, 30 78, 30 75 Z"
            fill={hairColor}
            className={className}
          />
        );
    }
  };

  return renderHair();
};