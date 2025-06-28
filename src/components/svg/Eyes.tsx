import React from 'react';

interface EyesProps {
  type: string;
  eyeColor: string;
  className?: string;
}

export const Eyes: React.FC<EyesProps> = ({ type, eyeColor, className = '' }) => {
  const renderEyes = () => {
    switch (type) {
      case 'sleepy':
        return (
          <g className={className}>
            <path d="M45 75 Q50 70 55 75" stroke="#000" strokeWidth="2" fill="none" />
            <path d="M65 75 Q70 70 75 75" stroke="#000" strokeWidth="2" fill="none" />
          </g>
        );
      case 'wink':
        return (
          <g className={className}>
            <ellipse cx="50" cy="75" rx="6" ry="8" fill="white" stroke="#000" strokeWidth="1" />
            <ellipse cx="50" cy="75" rx="3" ry="4" fill={eyeColor} />
            <ellipse cx="50" cy="73" rx="1" ry="2" fill="white" />
            <path d="M65 75 Q70 70 75 75" stroke="#000" strokeWidth="2" fill="none" />
          </g>
        );
      case 'heart':
        return (
          <g className={className}>
            <path d="M45 75 C45 70, 50 70, 50 75 C50 70, 55 70, 55 75 C55 78, 50 82, 50 82 C50 82, 45 78, 45 75 Z" fill={eyeColor} />
            <path d="M65 75 C65 70, 70 70, 70 75 C70 70, 75 70, 75 75 C75 78, 70 82, 70 82 C70 82, 65 78, 65 75 Z" fill={eyeColor} />
          </g>
        );
      default: // normal
        return (
          <g className={className}>
            <ellipse cx="50" cy="75" rx="6" ry="8" fill="white" stroke="#000" strokeWidth="1" />
            <ellipse cx="50" cy="75" rx="3" ry="4" fill={eyeColor} />
            <ellipse cx="50" cy="73" rx="1" ry="2" fill="white" />
            <ellipse cx="70" cy="75" rx="6" ry="8" fill="white" stroke="#000" strokeWidth="1" />
            <ellipse cx="70" cy="75" rx="3" ry="4" fill={eyeColor} />
            <ellipse cx="70" cy="73" rx="1" ry="2" fill="white" />
          </g>
        );
    }
  };

  return renderEyes();
};