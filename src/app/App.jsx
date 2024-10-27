import React from "react";
import "./App.css";
import Header from "../components/header";
import Hero from "../components/hero";
import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import PaymentMethods from "../components/PaymentMethods";
import Footer from "../components/footer";
import { AppContext } from "../context/AppContext";


function App() {
  return (
    <AppContext>
      <div className="App">
        <Header />
        <main className="main-bg">
          <div className="main-container">
            <Hero />
            <FilterBar />
            <ProductGrid />
          </div>
        </main>
        <PaymentMethods />
        <Footer />
      </div>
    </AppContext>
  );
}

export default App;
