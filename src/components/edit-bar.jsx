import { useState } from "react";
import InputField from "./input-field";
import FreeTypingArea from "./free-typing-area";
import warningMessages from "./warning-messages";
import "../styles/edit-bar.css";

export default function EditBar({ handleGeneralInfo, generalInfo }) {
  const [eduParts, setEduParts] = useState([1]);
  const [expParts, setExpParts] = useState([1]);
  const [infoParts, setInfoParts] = useState([1]);

  function handleAddInfoParts() {
    if (infoParts.length < 3) {
      setInfoParts((prev) => [...prev, prev.length + 1]);
    } else {
      alert(warningMessages.tooManyInfo);
    }
  }

  function handleRemoveInfoParts() {
    if (infoParts.length > 1) {
      setInfoParts((prev) => prev.slice(0, -1));
    } else {
      alert(warningMessages.tooFewInfo);
    }
  }

  function handleAddEduParts() {
    if (eduParts.length < 4) {
      setEduParts((prev) => [...prev, prev.length + 1]);
    } else {
      alert(warningMessages.tooManyEdu);
    }
  }

  function handleRemoveEduParts() {
    if (eduParts.length > 1) {
      setEduParts((prev) => prev.slice(0, -1));
    } else {
      alert(warningMessages.tooFewEdu);
    }
  }

  function handleAddExpParts() {
    if (expParts.length < 5) {
      setExpParts((prev) => [...prev, prev.length + 1]);
    } else {
      alert(warningMessages.tooManyExp);
    }
  }

  function handleRemoveExpParts() {
    if (expParts.length > 1) {
      setExpParts((prev) => prev.slice(0, -1));
    } else {
      alert(warningMessages.tooFewExp);
    }
  }

  return (
    <>
      <div id="general-information-container" className="editor-container">
        <GeneralInformation
          handleGeneralInfo={handleGeneralInfo}
          generalInfo={generalInfo}
        />
      </div>

      <div id="education-container" className="editor-container">
        {eduParts.map((eduPart) => (
          <EducationalExperience index={eduPart} />
        ))}
        <button onClick={handleAddEduParts}>Add More</button>
        <button onClick={handleRemoveEduParts}>Remove</button>
      </div>

      <div id="experience-container" className="editor-container">
        {expParts.map((expPart) => (
          <PracticalExperience index={expPart} />
        ))}
        <button onClick={handleAddExpParts}>Add Experience</button>
        <button onClick={handleRemoveExpParts}>Remove Experience</button>
      </div>

      <div id="more-info-container" className="editor-container">
        {infoParts.map((infoPart) => (
          <MoreInformation index={infoPart} />
        ))}
        <button onClick={handleAddInfoParts}>Add Additional Information</button>
        <button onClick={handleRemoveInfoParts}>Remove Previous</button>
      </div>
    </>
  );
}

function GeneralInformation({ handleGeneralInfo, generalInfo }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [uName, setUName] = useState("John Mc Tavish");

  function handleCollapse() {
    isCollapsed ? setIsCollapsed(!isCollapsed) : setIsCollapsed(true);
  }

  function handleNameChange(e) {
    setUName(e.target.value);
    let genCopy = Object.create(generalInfo);
    genCopy.name = uName;
    genCopy.email = generalInfo.email;
    genCopy.tel = generalInfo.tel;
    handleGeneralInfo(genCopy);
  }

  if (isCollapsed) {
    return (
      <>
        <h2>General Information</h2>
        <EditorButton
          text={"Edit General Information"}
          onClick={handleCollapse}
        />
      </>
    );
  }

  return (
    <>
      <h2>General Information </h2>
      <InputField
        type={"text"}
        userGuidance={"Your Name:"}
        onChange={handleNameChange}
      ></InputField>
      <InputField type={"email"} userGuidance={"Your Email:"}></InputField>
      <InputField type={"tel"} userGuidance={"Your Telephone:"}></InputField>
      <EditorButton text={"Save Field"} onClick={handleCollapse} />
    </>
  );
}

function EducationalExperience({ index }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleCollapse() {
    isCollapsed ? setIsCollapsed(!isCollapsed) : setIsCollapsed(true);
  }

  if (isCollapsed) {
    return (
      <>
        <h2>Education {index}</h2>
        <EditorButton
          text={"Edit General Information"}
          onClick={handleCollapse}
        />
      </>
    );
  }

  return (
    <>
      <h2>Education {index}</h2>
      <InputField
        type="text"
        userGuidance={"Education Facility Name"}
      ></InputField>
      <InputField type="text" userGuidance={"Title of Subject"}></InputField>
      <InputField type="date" userGuidance={"Date started"}></InputField>
      <InputField type="date" userGuidance={"Date finished"}></InputField>
      <FreeTypingArea
        type="text"
        userGuidance={"Education description"}
        rows={5}
        cols={33}
      />
      <EditorButton text={"Save Education"} onClick={handleCollapse} />
    </>
  );
}

function PracticalExperience({ index }) {
  const [hasEndDate, setEndDate] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleEndDate() {
    if (hasEndDate === false) {
      setEndDate(true);
    } else {
      setEndDate(false);
    }
  }

  function handleCollapse() {
    isCollapsed ? setIsCollapsed(!isCollapsed) : setIsCollapsed(true);
  }

  if (isCollapsed) {
    return (
      <>
        <h2>Experience {index}</h2>
        <EditorButton
          text={"Edit Experience Information"}
          onClick={handleCollapse}
        />
      </>
    );
  }

  return (
    <>
      <h2>Experience {index}</h2>
      <InputField type="text" userGuidance={"Company Name"}></InputField>
      <InputField type="text" userGuidance={"Position"}></InputField>
      <InputField type="date" userGuidance={"Starting Date"}></InputField>
      <EndDate handleEndDate={handleEndDate} hasEndDate={hasEndDate}></EndDate>
      <FreeTypingArea
        type="text"
        userGuidance={"Experience description"}
        rows={5}
        cols={33}
      />
      <EditorButton
        text={"Save Experience Information"}
        onClick={handleCollapse}
      />
    </>
  );
}

function EndDate({ handleEndDate, hasEndDate }) {
  return (
    <div className="end-date-container">
      {hasEndDate ? (
        <InputField type="date" userGuidance={"End Date"}></InputField>
      ) : (
        <p>Currently working here</p>
      )}
      <button onClick={handleEndDate}>Click to toggle</button>
    </div>
  );
}

function MoreInformation() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleCollapse() {
    isCollapsed ? setIsCollapsed(!isCollapsed) : setIsCollapsed(true);
  }

  if (isCollapsed) {
    return (
      <>
        <h2>Additional Information</h2>
        <EditorButton
          text={"Edit Additional Information"}
          onClick={handleCollapse}
        />
      </>
    );
  }

  return (
    <>
      <h2>Additional Information</h2>
      <InputField type="text" userGuidance={"Title"} />
      <FreeTypingArea
        type="text"
        userGuidance={"Description | Skills | Languages"}
        rows={5}
        cols={33}
      />
      <EditorButton
        text={"Save Additional Information"}
        onClick={handleCollapse}
      />
    </>
  );
}

function EditorButton({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}
