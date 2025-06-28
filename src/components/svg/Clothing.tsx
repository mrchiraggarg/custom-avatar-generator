import React from 'react';

interface ClothingProps {
  type: string;
  clothingColor: string;
  className?: string;
}

export const Clothing: React.FC<ClothingProps> = ({ type, clothingColor, className = '' }) => {
  const renderClothing = () => {
    switch (type) {
      case 'hoodie':
        return (
          <g className={className}>
            <path d="M20 120 L20 140 C20 145, 25 150, 30 150 L90 150 C95 150, 100 145, 100 140 L100 120" fill={clothingColor} stroke="#000" strokeWidth="1" />
            <path d="M35 120 L35 135 L85 135 L85 120" fill={clothingColor} opacity="0.8" />
            <circle cx="60" cy="130" r="3" fill="#666" />
          </g>
        );
      case 'blazer':
        return (
          <g className={className}>
            <path d="M25 120 L25 145 C25 148, 28 150, 31 150 L89 150 C92 150, 95 148, 95 145 L95 120" fill={clothingColor} stroke="#000" strokeWidth="1" />
            <path d="M35 120 L35 140 L50 140 L50 120" fill={clothingColor} opacity="0.9" />
            <path d="M70 120 L70 140 L85 140 L85 120" fill={clothingColor} opacity="0.9" />
            <circle cx="45" cy="135" r="2" fill="#333" />
            <circle cx="75" cy="135" r="2" fill="#333" />
          </g>
        );
      case 'dress':
        return (
          <g className={className}>
            <path d="M30 120 L25 140 C25 145, 28 150, 33 150 L87 150 C92 150, 95 145, 95 140 L90 120" fill={clothingColor} stroke="#000" strokeWidth="1" />
            <path d="M40 125 L80 125 L85 140 L35 140 Z" fill={clothingColor} opacity="0.8" />
          </g>
        );
      default: // tshirt
        return (
          <path
            d="M30 120 L30 145 C30 148, 33 150, 36 150 L84 150 C87 150, 90 148, 90 145 L90 120"
            fill={clothingColor}
            stroke="#000"
            strokeWidth="1"
            className={className}
          />
        );
    }
  };

  return renderClothing();
};