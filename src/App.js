import "./App.css";
import WeatherMain from "./WeatherMain";

export default function App() {
  return (
    <div className="App">
      <WeatherMain defaultCity="New York"/>
      <footer>
        Project coded by Jess Zhang and open-sourced on{" "}
        <a
          href="https://github.com/jlynzhang/weather-app-v2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
