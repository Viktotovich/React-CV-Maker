import "./App.css";
import EditBar from "./components/edit-bar";

function App() {
  return (
    <>
      <aside>
        <EditBar></EditBar>
      </aside>
      <section>{/* The edited body */}</section>
    </>
  );
}

export default App;
