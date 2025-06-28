import React from 'react';

interface AccessoriesProps {
  type: string;
  accessoryColor: string;
  className?: string;
}

export const Accessories: React.FC<AccessoriesProps> = ({ type, accessoryColor, className = '' }) => {
  if (type === 'none') return null;

  const renderAccessory = () => {
    switch (type) {
      case 'sunglasses':
        return (
          <g className={className}>
            <ellipse cx="50" cy="75" rx="12" ry="8" fill="#333" stroke={accessoryColor} strokeWidth="2" />
            <ellipse cx="70" cy="75" rx="12" ry="8" fill="#333" stroke={accessoryColor} strokeWidth="2" />
            <path d="M62 75 L58 75" stroke={accessoryColor} strokeWidth="2" />
            <path d="M38 75 L35 70" stroke={accessoryColor} strokeWidth="2" />
            <path d="M82 75 L85 70" stroke={accessoryColor} strokeWidth="2" />
          </g>
        );
      case 'hat':
        return (
          <g className={className}>
            <ellipse cx="60" cy="45" rx="35" ry="8" fill={accessoryColor} />
            <path d="M35 45 C35 35, 45 25, 60 25 C75 25, 85 35, 85 45" fill={accessoryColor} />
          </g>
        );
      default: // glasses
        return (
          <g className={className}>
            <ellipse cx="50" cy="75" rx="12" ry="8" fill="rgba(255,255,255,0.3)" stroke={accessoryColor} strokeWidth="2" />
            <ellipse cx="70" cy="75" rx="12" ry="8" fill="rgba(255,255,255,0.3)" stroke={accessoryColor} strokeWidth="2" />
            <path d="M62 75 L58 75" stroke={accessoryColor} strokeWidth="2" />
            <path d="M38 75 L35 70" stroke={accessoryColor} strokeWidth="2" />
            <path d="M82 75 L85 70" stroke={accessoryColor} strokeWidth="2" />
          </g>
        );
    }
  };

  return renderAccessory();
};