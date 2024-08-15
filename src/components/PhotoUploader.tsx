// src/components/PhotoUploader.tsx
import React from "react";

interface PhotoUploaderProps {
  onPhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ onPhotoUpload }) => {
  return (
    <div className="mt-4">
      <input type="file" accept="image/*" onChange={onPhotoUpload} />
    </div>
  );
};

export default PhotoUploader;
