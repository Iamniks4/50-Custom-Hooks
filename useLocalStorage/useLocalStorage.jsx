import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const retValue = localStorage.getItem(key);
      if (retValue) {
        return JSON.parse(retValue);
      }
      return initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setStorageValue = (value) => {
    try {
      const val = value instanceof Function ? value(storedValue) : value;
      localStorage.setItem(key, JSON.stringify(val));
      setStoredValue(val);
    } catch (e) {}
  };

  return [storedValue, setStorageValue];
};

export default useLocalStorage;
