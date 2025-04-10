import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <h1>Hello, React!!</h1>
    </div>
  );
}
createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);