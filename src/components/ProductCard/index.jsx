import React from "react";
import "../../styles/ProductCard/index.css";
import Badge from "../Badge";
import Button from "../Button";
import { IconShoppingCart, IconMinus, IconPlus } from "@tabler/icons-react";
import { AppProvider } from "../../context/AppContext";

function ProductCard({ product }) {
  const { addToCart, shoppingCart, currency } = React.useContext(AppProvider);
  const [quantity, setQuantity] = React.useState(1);
  const [symbol, setSymbol] = React.useState("$");

  const getCurrency = () => {
    if (currency === "USD" || currency === "CAD") {
      setSymbol("$");
    } else if (currency === "EUR") {
      setSymbol("€");
    }
  };

  const handleQuantityChange = (action) => {
    if (action === "decrease" && quantity <= 1) {
      setQuantity(1);
    } else if (action === "increase" && quantity >= 10) {
      setQuantity(10);
    } else if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease") {
      setQuantity(quantity - 1);
    }

    getCurrency();
  };

  React.useMemo(() => {
    getCurrency();

    return () => {
      AbortSignal.abort();
    };
  }, [currency]);

  return (
    <div className="product-card">
      <div className="product-header__container">
        <div className="badges-container">
          {product.onSale && <Badge title="On sale" variant="sale" />}
          <Badge title="In stock" variant="stock" />
        </div>
        <div className="product-quantity__container">
          <IconMinus
            width={16}
            height={16}
            onClick={() => handleQuantityChange("decrease")}
            style={{ cursor: "pointer" }}
          />
          <input
            type="number"
            className="product-quantity__input"
            min={1}
            max={10}
            step={1}
            value={quantity}
            onChange={handleQuantityChange}
          />
          <IconPlus
            width={16}
            height={16}
            onClick={() => handleQuantityChange("increase")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <figure className="product-image__container">
        <img src={product.image} alt={product.name} className="product-image" />
      </figure>
      <h3>{product.name}</h3>
      <div className="price">
        <span
          className={
            product.onSale ? "original-price_discounted" : "original-price"
          }
        >
          {symbol}
          {product.price.toFixed(2) * quantity}
        </span>
        {product.onSale ? (
          <span className="sale-price">
            {symbol}
            {product.salePrice.toFixed(2) * quantity}
          </span>
        ) : null}
      </div>
      <div className="product-description__container">
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <figure className="product-gameIcon">
          <img src={product.gameIcon} alt="gameIcon" />
        </figure>
      </div>
      <div className="product-actions">
        <Button className="medium-full" variant="outline">
          DETAILS
        </Button>
        <Button
          className="medium-full"
          onClick={() =>
            addToCart(shoppingCart.length, {
              productName: product.name,
              productPrice: product.onSale
                ? product.salePrice.toFixed(2) * quantity
                : product.price.toFixed(2) * quantity,
            })
          }
        >
          ADD{" "}
          <span className="cart-icon">
            <IconShoppingCart width={16} height={16} />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
