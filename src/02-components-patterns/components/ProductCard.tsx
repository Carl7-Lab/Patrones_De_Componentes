import { CSSProperties, ReactElement, createContext } from "react";

import useProduct from "../hooks/useProduct";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfacesProduct";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  onChange,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });
  return (
    <Provider
      value={{
        counter,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
