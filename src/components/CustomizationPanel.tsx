import React from 'react';
import { AvatarConfig } from '../types/avatar';
import { AVATAR_OPTIONS } from '../constants/avatarOptions';

interface CustomizationPanelProps {
  config: AvatarConfig;
  onChange: (key: keyof AvatarConfig, value: string) => void;
  className?: string;
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  config,
  onChange,
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {AVATAR_OPTIONS.map((category) => (
        <div key={category.key} className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
            {category.name}
          </h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {category.options.map((option) => {
              const isSelected = config[category.key] === option.id;
              const isColor = option.id.startsWith('#');
              
              return (
                <button
                  key={option.id}
                  onClick={() => onChange(category.key, option.id)}
                  className={`
                    relative p-2 rounded-lg border-2 transition-all duration-200 hover:scale-105
                    ${isSelected 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }
                  `}
                  title={option.name}
                >
                  {isColor ? (
                    <div
                      className="w-8 h-8 rounded-full mx-auto border-2 border-white shadow-sm"
                      style={{ backgroundColor: option.id }}
                    />
                  ) : (
                    <div className="text-xs font-medium text-center text-gray-700 dark:text-gray-300">
                      {option.name}
                    </div>
                  )}
                  
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};