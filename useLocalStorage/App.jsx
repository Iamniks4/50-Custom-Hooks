import "./styles.css";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [count, setCount] = useLocalStorage("countLSKey", 0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{count || 0}</h3>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        !! inc the count !!
      </button>
    </div>
  );
}
