import { useEffect, useRef, useState } from "react";
import {
  InicialValues,
  Product,
  onChangeArgs,
} from "../interfaces/interfacesProduct";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InicialValues;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(initialValues?.count || value);
  }, [initialValues, value]);

  useEffect(() => {
    isMounted.current = true;
  }, [value]);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    newValue = Math.min(newValue, initialValues?.maxCount || newValue);

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};

export default useProduct;
