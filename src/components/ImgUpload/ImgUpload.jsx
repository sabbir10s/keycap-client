import React, { useState } from "react";

const ImageUpload = () => {
  const [images, setImages] = useState([null, null, null]);

  const handleImageChange = (e, index) => {
    const selectedImage = e.target.files[0];
    const updatedImages = [...images];
    updatedImages[index] = selectedImage;
    setImages(updatedImages);
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  return (
    <div className="space-y-4">
      {images.map((image, index) => (
        <div key={index} className="relative border rounded-lg p-2">
          {!image ? (
            <label className="cursor-pointer block text-center">
              <span className="text-blue-600">Upload Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, index)}
              />
            </label>
          ) : (
            <div className="mt-2 relative h-32">
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index}`}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                onClick={() => handleImageRemove(index)}
              >
                X
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageUpload;
