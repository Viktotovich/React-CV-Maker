import "./App.css";
import EditBar from "./components/edit-bar";
import CV from "./components/cv-page";
import { useState } from "react";
import { sampleData } from "./components/sample-data";

function App() {
  const [generalInfo, setGeneralInfo] = useState(sampleData.generalInformation);

  function handleGeneralInfo(newGeneralInfo) {
    setGeneralInfo(newGeneralInfo);
  }

  return (
    <>
      <aside>
        <EditBar
          handleGeneralInfo={handleGeneralInfo}
          generalInfo={generalInfo}
        ></EditBar>
      </aside>
      <section>
        <CV generalInfo={generalInfo}></CV>
      </section>
    </>
  );
}

export default App;
