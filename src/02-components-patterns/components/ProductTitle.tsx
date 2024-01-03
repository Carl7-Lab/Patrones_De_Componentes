import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let titleToShow: string;

  if (title && title.trim() !== "") {
    titleToShow = title;
  } else if (product.title && product.title.trim() !== "") {
    titleToShow = product.title;
  } else {
    titleToShow = "Title no assigned.";
  }

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {titleToShow}
    </span>
  );
};

export default ProductTitle;
