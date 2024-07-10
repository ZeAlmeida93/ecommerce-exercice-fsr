import { Icon } from "@iconify/react/dist/iconify.js";
import ProductCard from "./ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";
import { useState } from "react";
import ProductListCard from "./ProductListCard/ProductListCard";

// const product = {
//     "productImg": "/src/assets/products/product-cover-1.png",
//     "name": "Graphic Design",
//     "description": "English Department",
//     "oldPrice": 16.48,
//     "currentPrice": 6.48,
//     "colors": [
//         "#23856D",
//         "#23A6F0",
//         "#E77C40",
//         "#252B42"
//     ]
// }

const products = [
  {
    productImg: "/src/assets/products/product-cover-2.png",
    name: "Graphic Design",
    description: "English Department",
    oldPrice: 16.48,
    currentPrice: 6.48,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    productImg: "/src/assets/products/product-cover-3.png",
    name: "Web Development",
    description: "Computer Science Department",
    oldPrice: 20.0,
    currentPrice: 10.0,
    colors: ["#F1C40F", "#2ECC71", "#E74C3C", "#8E44AD"],
  },
  {
    productImg: "/src/assets/products/product-cover-5.png",
    name: "Data Analysis",
    description: "Mathematics Department",
    oldPrice: 25.5,
    currentPrice: 12.75,
    colors: ["#3498DB", "#1ABC9C", "#E67E22", "#34495E"],
  },
  {
    productImg: "/src/assets/products/product-cover-6.png",
    name: "Marketing",
    description: "Business Department",
    oldPrice: 30.0,
    currentPrice: 15.0,
    colors: ["#E91E63", "#9C27B0", "#FFEB3B", "#3F51B5"],
  },
  {
    productImg: "/src/assets/products/product-cover-7.png",
    name: "Photography",
    description: "Arts Department",
    oldPrice: 18.99,
    currentPrice: 9.49,
    colors: ["#607D8B", "#795548", "#FF5722", "#FFC107"],
  },
  {
    productImg: "/src/assets/products/product-cover-8.png",
    name: "Cybersecurity",
    description: "Information Security Department",
    oldPrice: 22.0,
    currentPrice: 11.0,
    colors: ["#009688", "#8BC34A", "#CDDC39", "#FF9800"],
  },
  {
    productImg: "/src/assets/products/product-cover-9.png",
    name: "UI/UX Design",
    description: "Design Department",
    oldPrice: 19.99,
    currentPrice: 9.99,
    colors: ["#3F51B5", "#FF4081", "#00BCD4", "#9E9E9E"],
  },
  {
    productImg: "/src/assets/products/product-cover-1.png",
    name: "Machine Learning",
    description: "Artificial Intelligence Department",
    oldPrice: 27.5,
    currentPrice: 13.75,
    colors: ["#673AB7", "#2196F3", "#4CAF50", "#FF5722"],
  },
];

//

function ProductGrid() {
  let [isGrid, setIsGrid] = useState(true);


  return (
    <>
      <div className={styles.listStyle}>
        <Icon
          className={styles.muted}
          onClick={() => {
            setIsGrid(true);
          }}
          icon="mingcute:grid-fill"
          height="2.4rem"
        />
        <Icon
          className={styles.muted}
          onClick={() => {
            setIsGrid(false);
          }}
        icon="mingcute:list-check-line"
          height="2.4rem"
        />
      </div>
      <div className={isGrid ? styles.wrapper : styles.wrapper_list}>
        {products.map((product) => {

         
          return  ( isGrid? (
            <ProductCard
              productName={product.name}
              image={product.productImg}
              description={product.description}
              oldPrice={product.oldPrice}
              currentPrice={product.currentPrice}
              variantColors={product.colors}
            />
          ) : (<ProductListCard
            productName={product.name}
            image={product.productImg}
            description={product.description}
            oldPrice={product.oldPrice}
            currentPrice={product.currentPrice}
            variantColors={product.colors}

          />)
          )}) }

         
      </div>

    </>
  );
}

export default ProductGrid;
