import "./styles.css";
import ProgressBar from "./Components/ProgressBar";

export default function App() {
  return (
    <div className="App">
      <h1>ProgressBar</h1>

      <br />
      <br />
      <ProgressBar limit="80" />
    </div>
  );
}
