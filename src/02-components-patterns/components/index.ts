import ProductButtons from "./ProductButtons";
import ProductCardHOC from "./ProductCard";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfacesProduct";

export { ProductButtons, ProductTitle, ProductImage };

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
});

export default ProductCard;
