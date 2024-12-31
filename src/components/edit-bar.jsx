import { useState } from "react";
import InputField from "./input-field";
import FreeTypingArea from "./free-typing-area";
import warningMessages from "./warning-messages";
import "../styles/edit-bar.css";
import { pureObjects } from "./create-pure-objects";

export default function EditBar({
  handleGeneralInfo,
  generalInfo,
  handleEduInfo,
  eduInfo,
}) {
  const [eduParts, setEduParts] = useState([1]);
  const [expParts, setExpParts] = useState([1]);
  const [infoParts, setInfoParts] = useState([1]);

  function addAnotherEdu() {
    const fullCopy = eduInfo.slice(0, eduInfo.length);
    const additionalLayer = new pureObjects.CreateEduField();
    fullCopy.push(additionalLayer);
    handleEduInfo(fullCopy);
  }

  function removeEduField() {
    const fullCopy = eduInfo.slice(0, eduInfo.length);
    fullCopy.pop();
    handleEduInfo(fullCopy);
  }

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
      addAnotherEdu();
      setEduParts((prev) => [...prev, prev.length + 1]);
    } else {
      alert(warningMessages.tooManyEdu);
    }
  }

  function handleRemoveEduParts() {
    if (eduParts.length > 1) {
      removeEduField();
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
          key={generalInfo.id}
        />
      </div>

      <div id="education-container" className="editor-container">
        {eduParts.map((eduPart) => (
          <EducationalExperience
            index={eduPart}
            handleEduInfo={handleEduInfo}
            eduInfo={eduInfo}
          />
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
  const [uEmail, setUEmail] = useState("test@aol.com");
  const [uTel, setUTel] = useState("+971 55 123 1234");

  function handleCollapse() {
    isCollapsed ? setIsCollapsed(!isCollapsed) : setIsCollapsed(true);
  }

  function handleNameChange(e) {
    const updatedName = e.target.value;
    setUName(updatedName);

    const genCopy = {
      ...generalInfo,
      name: updatedName,
    };

    handleGeneralInfo(genCopy);
  }

  function handleEmailChange(e) {
    const updatedEmail = e.target.value;
    setUEmail(updatedEmail);

    const genCopy = {
      ...generalInfo,
      email: updatedEmail,
    };

    handleGeneralInfo(genCopy);
  }

  function handleTelChange(e) {
    const updatedTel = e.target.value;
    setUTel(updatedTel);

    const genCopy = {
      ...generalInfo,
      tel: updatedTel,
    };

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
        text={generalInfo.name}
      />
      <InputField
        type={"email"}
        userGuidance={"Your Email:"}
        onChange={handleEmailChange}
        text={generalInfo.email}
      />
      <InputField
        type={"tel"}
        userGuidance={"Your Telephone:"}
        onChange={handleTelChange}
        text={generalInfo.tel}
      />
      <EditorButton text={"Save Field"} onClick={handleCollapse} />
    </>
  );
}

function EducationalExperience({ index, handleEduInfo, eduInfo }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [facility, setFacility] = useState(eduInfo[0].educationFacilityName);
  const [subject, setSubject] = useState(eduInfo[0].subjectTitle);
  const [startDate, setStartDate] = useState(eduInfo[0].dateStarted);
  const [endDate, setEndDate] = useState(eduInfo[0].dateFinished);
  const [eduDescription, setEDescription] = useState(eduInfo[0].eduDescription);

  function handleCollapse() {
    isCollapsed ? setIsCollapsed(!isCollapsed) : setIsCollapsed(true);
  }

  // ALL These event handlers ALSO change any additionaly added education fields
  //TODO: find a way to make a copy without references
  function handleFacilityChange(e) {
    const updatedFacility = e.target.value;
    setFacility(updatedFacility);

    const fullCopy = eduInfo.slice(0, eduInfo.length);
    fullCopy[index - 1].educationFacilityName = updatedFacility;

    handleEduInfo(fullCopy);
  }

  function handleSubjectChange(e) {
    const updatedSubject = e.target.value;
    setSubject(updatedSubject);

    const fullCopy = eduInfo.slice(0, eduInfo.length);
    fullCopy[index - 1].subjectTitle = updatedSubject;

    handleEduInfo(fullCopy);
  }

  function handleStartDateChange(e) {
    const updatedSDate = e.target.value;
    setStartDate(updatedSDate);

    const fullCopy = eduInfo.slice(0, eduInfo.length);
    fullCopy[index - 1].dateStarted = updatedSDate;

    handleEduInfo(fullCopy);
  }

  function handleEndDateChange(e) {
    const updatedEDate = e.target.value;
    setEndDate(updatedEDate);

    const fullCopy = eduInfo.slice(0, eduInfo.length);
    fullCopy[index - 1].dateFinished = updatedEDate;

    handleEduInfo(fullCopy);
  }

  function handleDescriptionChange(e) {
    const updatedDescription = e.target.value;
    setEDescription(updatedDescription);

    const fullCopy = eduInfo.slice(0, eduInfo.length);
    fullCopy[index - 1].eduDescription = updatedDescription;

    handleEduInfo(fullCopy);
    console.log(eduInfo);
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
        onChange={handleFacilityChange}
        text={eduInfo[index - 1].educationFacilityName}
      ></InputField>

      <InputField
        type="text"
        userGuidance={"Title of Subject"}
        onChange={handleSubjectChange}
        text={eduInfo[index - 1].subjectTitle}
      ></InputField>

      <InputField
        type="date"
        userGuidance={"Date started"}
        onChange={handleStartDateChange}
        text={eduInfo[index - 1].dateStarted}
      ></InputField>

      <InputField
        type="date"
        userGuidance={"Date finished"}
        onChange={handleEndDateChange}
        text={eduInfo[index - 1].dateFinished}
      ></InputField>

      <FreeTypingArea
        type="text"
        userGuidance={"Education description"}
        rows={5}
        cols={33}
        text={eduInfo[index - 1].eduDescription}
        onChange={handleDescriptionChange}
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
