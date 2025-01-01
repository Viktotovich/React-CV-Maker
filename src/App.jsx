import "./App.css";
import EditBar from "./components/edit-bar";
import CV from "./components/cv-page";
import { useState } from "react";
import {
  generalInformation,
  educationInformation,
  experienceInformation,
  additionalInformation,
} from "./components/sample-data";

function App() {
  const [generalInfo, setGeneralInfo] = useState(generalInformation);
  const [eduInfo, setEduInfo] = useState(educationInformation);
  const [expInfo, setExpInfo] = useState(experienceInformation);
  const [aInfo, setAInfo] = useState(additionalInformation);

  function handleGeneralInfo(newGeneralInfo) {
    setGeneralInfo(newGeneralInfo);
  }

  function handleEduInfo(newEduInfo) {
    setEduInfo(newEduInfo);
  }

  function handleExpInfo(newExpInfo) {
    setExpInfo(newExpInfo);
  }

  function handleAInfo(newAInfo) {
    setAInfo(newAInfo);
  }

  return (
    <>
      <aside>
        <EditBar
          handleGeneralInfo={handleGeneralInfo}
          generalInfo={generalInfo}
          handleEduInfo={handleEduInfo}
          eduInfo={eduInfo}
          handleExpInfo={handleExpInfo}
          expInfo={expInfo}
          handleAInfo={handleAInfo}
          aInfo={aInfo}
        ></EditBar>
      </aside>
      <section>
        <CV
          generalInfo={generalInfo}
          eduInfo={eduInfo}
          expInfo={expInfo}
          aInfo={aInfo}
        ></CV>
      </section>
    </>
  );
}

export default App;
