export interface AvatarConfig {
  faceShape: string;
  skinColor: string;
  eyeType: string;
  eyeColor: string;
  hairType: string;
  hairColor: string;
  clothingType: string;
  clothingColor: string;
  accessory: string;
  accessoryColor: string;
}

export interface AvatarOption {
  id: string;
  name: string;
  component?: React.ComponentType<{ color?: string; className?: string }>;
}

export interface AvatarCategory {
  name: string;
  key: keyof AvatarConfig;
  options: AvatarOption[];
  hasColor?: boolean;
  colors?: string[];
}