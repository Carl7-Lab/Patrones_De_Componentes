import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfacesProduct";

const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log({ count });
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: deletedProduct, ...updatedShoppingCart } =
          oldShoppingCart;
        return updatedShoppingCart;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return { shoppingCart, onProductCountChange };
};

export default useShoppingCard;
