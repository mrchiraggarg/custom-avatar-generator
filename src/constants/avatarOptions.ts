import { AvatarCategory } from '../types/avatar';

export const SKIN_COLORS = [
  '#FDBCB4', '#F1C27D', '#E0AC69', '#C68642', '#8D5524', '#A0522D'
];

export const HAIR_COLORS = [
  '#2C1B18', '#724832', '#A0522D', '#DEB887', '#F4A460', '#FFE4B5', 
  '#FF6347', '#9370DB', '#FF1493', '#00CED1'
];

export const CLOTHING_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD',
  '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
];

export const ACCESSORY_COLORS = [
  '#2C3E50', '#E74C3C', '#3498DB', '#F39C12', '#9B59B6', '#1ABC9C',
  '#34495E', '#E67E22', '#8E44AD', '#16A085'
];

export const AVATAR_OPTIONS: AvatarCategory[] = [
  {
    name: 'Face Shape',
    key: 'faceShape',
    options: [
      { id: 'round', name: 'Round' },
      { id: 'oval', name: 'Oval' },
      { id: 'square', name: 'Square' }
    ]
  },
  {
    name: 'Skin Color',
    key: 'skinColor',
    options: SKIN_COLORS.map((color, index) => ({
      id: color,
      name: `Skin ${index + 1}`
    }))
  },
  {
    name: 'Eyes',
    key: 'eyeType',
    options: [
      { id: 'normal', name: 'Normal' },
      { id: 'sleepy', name: 'Sleepy' },
      { id: 'wink', name: 'Wink' },
      { id: 'heart', name: 'Heart' }
    ]
  },
  {
    name: 'Eye Color',
    key: 'eyeColor',
    options: [
      { id: '#8B4513', name: 'Brown' },
      { id: '#4169E1', name: 'Blue' },
      { id: '#228B22', name: 'Green' },
      { id: '#708090', name: 'Gray' },
      { id: '#800080', name: 'Purple' }
    ]
  },
  {
    name: 'Hair',
    key: 'hairType',
    options: [
      { id: 'short', name: 'Short' },
      { id: 'long', name: 'Long' },
      { id: 'curly', name: 'Curly' },
      { id: 'bun', name: 'Bun' },
      { id: 'none', name: 'Bald' }
    ]
  },
  {
    name: 'Hair Color',
    key: 'hairColor',
    options: HAIR_COLORS.map((color, index) => ({
      id: color,
      name: `Hair ${index + 1}`
    }))
  },
  {
    name: 'Clothing',
    key: 'clothingType',
    options: [
      { id: 'tshirt', name: 'T-Shirt' },
      { id: 'hoodie', name: 'Hoodie' },
      { id: 'blazer', name: 'Blazer' },
      { id: 'dress', name: 'Dress' }
    ]
  },
  {
    name: 'Clothing Color',
    key: 'clothingColor',
    options: CLOTHING_COLORS.map((color, index) => ({
      id: color,
      name: `Color ${index + 1}`
    }))
  },
  {
    name: 'Accessory',
    key: 'accessory',
    options: [
      { id: 'none', name: 'None' },
      { id: 'glasses', name: 'Glasses' },
      { id: 'sunglasses', name: 'Sunglasses' },
      { id: 'hat', name: 'Hat' }
    ]
  },
  {
    name: 'Accessory Color',
    key: 'accessoryColor',
    options: ACCESSORY_COLORS.map((color, index) => ({
      id: color,
      name: `Color ${index + 1}`
    }))
  }
];

export const DEFAULT_AVATAR_CONFIG = {
  faceShape: 'round',
  skinColor: SKIN_COLORS[0],
  eyeType: 'normal',
  eyeColor: '#8B4513',
  hairType: 'short',
  hairColor: HAIR_COLORS[0],
  clothingType: 'tshirt',
  clothingColor: CLOTHING_COLORS[0],
  accessory: 'none',
  accessoryColor: ACCESSORY_COLORS[0]
};