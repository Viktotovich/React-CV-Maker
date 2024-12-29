import "./App.css";
import EditBar from "./components/edit-bar";
import CV from "./components/cv-page";

function App() {
  return (
    <>
      <aside>
        <EditBar></EditBar>
      </aside>
      <section>
        <CV></CV>
      </section>
    </>
  );
}

export default App;
