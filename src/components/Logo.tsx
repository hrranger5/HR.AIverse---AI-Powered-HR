// FIX: Replaced the corrupted image-based logo with a styled text-based logo
// to resolve the module import error. The original base64 string was causing
// the build process to fail to correctly identify the default export.
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="text-2xl font-bold text-white tracking-wider">
      <span className="text-accent">HR</span>.AIverse
    </div>
  );
};

export default Logo;
