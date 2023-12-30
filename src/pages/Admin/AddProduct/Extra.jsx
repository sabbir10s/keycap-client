// Extra.js

import React, { useState, useRef } from "react";

const Extra = () => {
  const [isHighlight, setIsHighlight] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsHighlight(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsHighlight(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsHighlight(false);

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = function (e) {
          setImagePreview(e.target.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert("Please select an image file.");
      }
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setImagePreview(null);
  };

  return (
    <div
      className={`p-8 border-2 border-dashed relative ${
        isHighlight ? "border-green-500 bg-green-100" : "border-gray-300"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleFileSelect}
    >
      {imagePreview ? (
        <div className="relative">
          <img
            src={imagePreview}
            alt="Image Preview"
            className="max-w-full max-h-48 mx-auto border border-gray-300"
          />
          <button
            className="absolute top-0 right-0 mt-2 mr-2 px-2 py-1 bg-red-500 text-white rounded-full focus:outline-none"
            onClick={handleRemoveImage}
          >
            Remove
          </button>
        </div>
      ) : (
        <p className="text-gray-600 cursor-pointer">
          Drag and drop an image here or click to select one.
        </p>
      )}
      <input
        type="file"
        className="hidden "
        onChange={handleFileInputChange}
        ref={fileInputRef}
        accept="image/*"
      />
    </div>
  );
};

export default Extra;
