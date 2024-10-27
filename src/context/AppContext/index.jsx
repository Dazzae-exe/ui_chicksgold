import React from "react";

const AppProvider = React.createContext();

function AppContext({ children }) {
  // Shopping cart flow
  const [shoppingCart, setShoppingCart] = React.useState([]);

  const addToCart = (value, data) => {
    const oldValue = shoppingCart;
    const newData = data;

    if (value >= 0) {
      setShoppingCart([...oldValue, newData]);
    } else if (value < 0) {
      return;
    }
  };

  // currency flow
  const [currency, setCurrency] = React.useState("USD");

  return (
    <AppProvider.Provider
      value={{ addToCart, shoppingCart, setCurrency, currency }}
    >
      {children}
    </AppProvider.Provider>
  );
}

export { AppContext, AppProvider };
