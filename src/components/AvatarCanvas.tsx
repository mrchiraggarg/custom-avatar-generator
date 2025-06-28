import React from 'react';
import { AvatarConfig } from '../types/avatar';
import { Face } from './svg/Face';
import { Eyes } from './svg/Eyes';
import { Hair } from './svg/Hair';
import { Clothing } from './svg/Clothing';
import { Accessories } from './svg/Accessories';

interface AvatarCanvasProps {
  config: AvatarConfig;
  className?: string;
}

export const AvatarCanvas: React.FC<AvatarCanvasProps> = ({ config, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 120 160"
        className="w-full h-full"
        style={{ maxWidth: '300px', maxHeight: '400px' }}
      >
        {/* Background circle */}
        <circle cx="60" cy="80" r="55" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        
        {/* Hair (back layer) */}
        <Hair type={config.hairType} hairColor={config.hairColor} />
        
        {/* Face */}
        <Face shape={config.faceShape} skinColor={config.skinColor} />
        
        {/* Eyes */}
        <Eyes type={config.eyeType} eyeColor={config.eyeColor} />
        
        {/* Nose */}
        <ellipse cx="60" cy="85" rx="2" ry="3" fill="rgba(0,0,0,0.1)" />
        
        {/* Mouth */}
        <path d="M55 95 Q60 100 65 95" stroke="#000" strokeWidth="2" fill="none" />
        
        {/* Clothing */}
        <Clothing type={config.clothingType} clothingColor={config.clothingColor} />
        
        {/* Accessories */}
        <Accessories type={config.accessory} accessoryColor={config.accessoryColor} />
      </svg>
    </div>
  );
};