import React from "react";
import ProductCard from "../ProductCard";
import CustomSelect from "../Select";
import "../../styles/ProductGrid/index.css";
import PRODUCTS_AND_IMAGES from "../../utils/product-images";
import Pagination from "../Pagination";
import { IconFilter } from "@tabler/icons-react";

const SORT_OPTIONS = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function ProductGrid() {
  return (
    <div className="product-grid">
      <div className="product-grid-header">
        <span>Showing 20 - from 125</span>
        <CustomSelect
          title="Sort By"
          options={SORT_OPTIONS}
          defaultOption={SORT_OPTIONS[0]}
          icon={<IconFilter className="option-image" />}
          width="fit"
        />
      </div>
      <div className="product-list">
        {PRODUCTS_AND_IMAGES.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default ProductGrid;
