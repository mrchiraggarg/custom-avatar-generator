import { AvatarConfig } from '../types/avatar';
import { AVATAR_OPTIONS, DEFAULT_AVATAR_CONFIG } from '../constants/avatarOptions';

export const generateRandomAvatar = (): AvatarConfig => {
  const randomConfig: AvatarConfig = { ...DEFAULT_AVATAR_CONFIG };
  
  AVATAR_OPTIONS.forEach((category) => {
    const randomIndex = Math.floor(Math.random() * category.options.length);
    randomConfig[category.key] = category.options[randomIndex].id;
  });
  
  return randomConfig;
};

export const saveAvatarToStorage = (config: AvatarConfig): void => {
  try {
    localStorage.setItem('avatarConfig', JSON.stringify(config));
  } catch (error) {
    console.error('Failed to save avatar to localStorage:', error);
  }
};

export const loadAvatarFromStorage = (): AvatarConfig | null => {
  try {
    const saved = localStorage.getItem('avatarConfig');
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load avatar from localStorage:', error);
    return null;
  }
};

export const generateShareableUrl = (config: AvatarConfig): string => {
  const encodedConfig = btoa(JSON.stringify(config));
  return `${window.location.origin}${window.location.pathname}?avatar=${encodedConfig}`;
};

export const parseAvatarFromUrl = (): AvatarConfig | null => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const avatarParam = urlParams.get('avatar');
    
    if (avatarParam) {
      const decodedConfig = JSON.parse(atob(avatarParam));
      return decodedConfig;
    }
    
    return null;
  } catch (error) {
    console.error('Failed to parse avatar from URL:', error);
    return null;
  }
};

export const downloadSVG = (svgElement: SVGElement, filename: string = 'avatar.svg'): void => {
  const svgData = new XMLSerializer().serializeToString(svgElement);
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const svgUrl = URL.createObjectURL(svgBlob);
  
  const downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(svgUrl);
};

export const downloadPNG = (svgElement: SVGElement, filename: string = 'avatar.png'): void => {
  const svgData = new XMLSerializer().serializeToString(svgElement);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  
  canvas.width = 400;
  canvas.height = 533;
  
  img.onload = () => {
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const downloadLink = document.createElement('a');
          downloadLink.href = url;
          downloadLink.download = filename;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(url);
        }
      }, 'image/png');
    }
  };
  
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  img.src = url;
};