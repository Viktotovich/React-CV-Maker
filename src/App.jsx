import "./App.css";
import EditBar from "./components/edit-bar";
import CV from "./components/cv-page";
import { useState } from "react";
import { sampleData } from "./components/sample-data";

function App() {
  const [generalInfo, setGeneralInfo] = useState(sampleData.generalInformation);
  const [eduInfo, setEduInfo] = useState(sampleData.educationInformation);

  function handleGeneralInfo(newGeneralInfo) {
    setGeneralInfo(newGeneralInfo);
  }

  function handleEduInfo(newEduInfo) {
    setEduInfo(newEduInfo);
  }

  return (
    <>
      <aside>
        <EditBar
          handleGeneralInfo={handleGeneralInfo}
          generalInfo={generalInfo}
          handleEduInfo={handleEduInfo}
          eduInfo={eduInfo}
        ></EditBar>
      </aside>
      <section>
        <CV generalInfo={generalInfo} eduInfo={eduInfo}></CV>
      </section>
    </>
  );
}

export default App;
