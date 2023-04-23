import { useState, useEffect } from "react";

const useDebounce = (inputValue, timer) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, timer);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return debouncedValue;
};

export default useDebounce;
