import React from "react";
import "../../styles/select/index.css";
import { AppProvider } from "../../context/AppContext";

function CustomSelect({
  options,
  defaultOption,
  onChange,
  title,
  icon,
  width = "full",
  colStart,
  colEnd,
  header,
}) {
  const { setCurrency } = React.useContext(AppProvider);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(
    defaultOption || options[0]
  );
  const selectRef = React.useRef(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (
      option.value === "USD" ||
      option.value === "EUR" ||
      option.value === "CAD"
    ) {
      setCurrency(option.value);
    }

    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={`custom-select ${isOpen ? "open" : ""} w-${width}`}
      ref={selectRef}
      style={
        colStart && colEnd ? { gridColumn: `span ${colStart} / ${colEnd}` } : {}
      }
    >
      <div
        className={`select-header ${header ? "p-header" : ""}`}
        onClick={toggleSelect}
      >
        {icon}
        <div className="option-label-container">
          {title && <span className="option-title">{title}</span>}
          <span className="option-label">{selectedOption.label}</span>
        </div>
        <span className="select-arrow"></span>
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.image ? option.image : null}
              <span className="option-label">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
