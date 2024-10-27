import React from "react";
import "../../styles/Header/index.css";
import { IconChevronDown, IconCurrencyDollar } from "@tabler/icons-react";
import CustomSelect from "../Select";
import Button from "../Button";
import { IconUserCircle } from "@tabler/icons-react";
import MenuBar from "../MenuBar";
import { MENU_ITEMS, CURRENCY_OPTIONS } from "../../utils/header-data.js";
import { IconShoppingCart } from "@tabler/icons-react";
import { AppProvider } from "../../context/AppContext/index.jsx";

function Header() {
  const { shoppingCart } = React.useContext(AppProvider);

  const handleMouseEnter = (item) => {
    document.getElementById(`${item}-arrow`).classList.remove("arrow-down");
    document.getElementById(`${item}-arrow`).classList.add("arrow-up");
  };

  const handleMouseLeave = (item) => {
    document.getElementById(`${item}-arrow`).classList.remove("arrow-up");
    document.getElementById(`${item}-arrow`).classList.add("arrow-down");
  };

  return (
    <header className="header">
      <div className="container">
        <figure className="logo-container">
          <img
            src="https://chicksgold.com/logo/chicks-logo-large.svg"
            alt="CHICKS GOLD"
            className="logo"
          />
        </figure>
        <nav>
          <ul>
            {MENU_ITEMS.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {item.label}{" "}
                  <IconChevronDown
                    width={14}
                    height={14}
                    id={`${index}-arrow`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="shoppingCart-icon">
          {shoppingCart.length <= 0 ? (
            ""
          ) : (
            <div>
              <span className="cart-icon__badge">{shoppingCart.length}</span>
              <IconShoppingCart width={24} height={24} />
            </div>
          )}
        </div>
        <div className="user-actions">
          <CustomSelect
            options={CURRENCY_OPTIONS}
            defaultOption={CURRENCY_OPTIONS[0]}
            icon={<IconCurrencyDollar className="option-image" />}
            width="fit"
            header
          />
          <Button className="medium-full" variant="primary">
            SIGN IN{" "}
            <IconUserCircle
              className="button-icon"
              width={16}
              height={16}
              style={{ marginLeft: 2 }}
            />
          </Button>
        </div>
        <MenuBar menuItems={MENU_ITEMS} currencyOpts={CURRENCY_OPTIONS} />
      </div>
    </header>
  );
}

export default Header;
