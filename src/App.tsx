import React, { useState, useEffect, useRef } from 'react';
import { Download, Shuffle, RotateCcw, Share2, Sun, Moon, Copy, Check } from 'lucide-react';
import { AvatarCanvas } from './components/AvatarCanvas';
import { CustomizationPanel } from './components/CustomizationPanel';
import { AvatarConfig } from './types/avatar';
import { DEFAULT_AVATAR_CONFIG } from './constants/avatarOptions';
import { 
  generateRandomAvatar, 
  saveAvatarToStorage, 
  loadAvatarFromStorage,
  generateShareableUrl,
  parseAvatarFromUrl,
  downloadSVG,
  downloadPNG
} from './utils/avatarUtils';
import { useTheme } from './hooks/useTheme';

function App() {
  const [config, setConfig] = useState<AvatarConfig>(DEFAULT_AVATAR_CONFIG);
  const [copied, setCopied] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Try to load from URL first, then localStorage
    const urlConfig = parseAvatarFromUrl();
    if (urlConfig) {
      setConfig(urlConfig);
    } else {
      const savedConfig = loadAvatarFromStorage();
      if (savedConfig) {
        setConfig(savedConfig);
      }
    }
  }, []);

  useEffect(() => {
    saveAvatarToStorage(config);
  }, [config]);

  const handleConfigChange = (key: keyof AvatarConfig, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleRandomize = () => {
    setConfig(generateRandomAvatar());
  };

  const handleReset = () => {
    setConfig(DEFAULT_AVATAR_CONFIG);
  };

  const handleShare = async () => {
    const shareUrl = generateShareableUrl(config);
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const handleDownloadSVG = () => {
    const svgElement = avatarRef.current?.querySelector('svg');
    if (svgElement) {
      downloadSVG(svgElement);
    }
  };

  const handleDownloadPNG = () => {
    const svgElement = avatarRef.current?.querySelector('svg');
    if (svgElement) {
      downloadPNG(svgElement);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-lg"></div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Avatar Generator
            </h1>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Create your perfect avatar with our advanced customization tools. Mix and match different features to build a unique digital identity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Avatar Display */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sticky top-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Your Avatar
                </h2>
                <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-purple-500 mx-auto"></div>
              </div>
              
              <div ref={avatarRef} className="flex justify-center mb-6">
                <AvatarCanvas config={config} className="transform hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleRandomize}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <Shuffle className="w-4 h-4" />
                    Randomize
                  </button>
                  
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>

                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Share Avatar'}
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleDownloadSVG}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    SVG
                  </button>
                  
                  <button
                    onClick={handleDownloadPNG}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    PNG
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Customize Your Avatar
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </div>
              
              <CustomizationPanel
                config={config}
                onChange={handleConfigChange}
                className="max-h-96 overflow-y-auto pr-2 custom-scrollbar"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 dark:text-gray-400">
          <p>Built with React, TypeScript, and lots of ❤️</p>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(148 163 184);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(100 116 139);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(71 85 105);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(51 65 85);
        }
      `}</style>
    </div>
  );
}

export default App;

export default App