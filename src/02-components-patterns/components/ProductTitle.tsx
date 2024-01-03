import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  let titleToShow: string;

  if (title && title.trim() !== "") {
    titleToShow = title;
  } else if (product.title && product.title.trim() !== "") {
    titleToShow = product.title;
  } else {
    titleToShow = "Title no assigned.";
  }

  return <span className={styles.productDescription}>{titleToShow}</span>;
};

export default ProductTitle;
