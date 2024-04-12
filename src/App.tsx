import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <ul>
          <li>
            <Link className="App-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="App-link" to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className="App-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </header>
      <main className="App-main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
