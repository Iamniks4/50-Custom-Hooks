import "./styles.css";
import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce(inputValue, 500);
  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if(debouncedValue) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${debouncedValue}`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(e => console.log("Api call made!!"))
    }
  }, [debouncedValue])
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        placeholder="debouncing test"
        value={inputValue}
        type={"number"}
        onChange={handleInputValueChange}
      />
    </div>
  );
}
