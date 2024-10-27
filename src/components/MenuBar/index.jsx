import React from "react";
import "../../styles/MenuBar/index.css";
import Button from "../Button";
import CustomSelect from "../Select";
import { IconX, IconCurrencyDollar, IconMenu2 } from "@tabler/icons-react";

function MenuBar({ menuItems, currencyOpts }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const sheetRef = React.useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      <Button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        <IconMenu2 width={16} height={16} />
      </Button>
      <div className={`menu-sheet ${isOpen ? "open" : ""}`} ref={sheetRef}>
        <div className="menu-sheet-header">
          <h2>Menu</h2>
          <Button
            className="close-button"
            onClick={toggleMenu}
            variant="transparent"
            ariaHidden={!isOpen}
          >
            <IconX width={16} height={16} />
          </Button>
        </div>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="menu-sheet-footer">
          <CustomSelect
            options={currencyOpts}
            defaultOption={currencyOpts[0]}
            icon={<IconCurrencyDollar className="option-image" />}
            width="full"
            className="currency-select"
            header
          />
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default MenuBar;
