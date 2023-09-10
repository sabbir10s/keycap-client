import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({
  defaultOpen = false,
  onOptionClick,
  children,
  toggleText,
  dropMenuClass,
  dropBtnClass,
  dropdownClass,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
    if (onOptionClick) {
      onOptionClick();
    }
  };

  return (
    <div className={`${dropdownClass}`} ref={dropdownRef}>
      <div className={`${dropBtnClass}`} onClick={toggleDropdown}>
        {toggleText}
      </div>
      {isOpen && (
        <div className={`${dropMenuClass}  z-40`}>
          {children.map((child, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={handleOptionClick}
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
