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
  handleExpInfo,
  expInfo,
  handleAInfo,
  aInfo,
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

  function addAnotherExp() {
    const fullCopy = expInfo.slice(0, expInfo.length);
    const additionalLayer = new pureObjects.CreateExpField();
    fullCopy.push(additionalLayer);
    handleExpInfo(fullCopy);
  }

  function removeExpField() {
    const fullCopy = expInfo.slice(0, expInfo.length);
    fullCopy.pop();
    handleExpInfo(fullCopy);
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
      addAnotherExp();
      setExpParts((prev) => [...prev, prev.length + 1]);
    } else {
      alert(warningMessages.tooManyExp);
    }
  }

  function handleRemoveExpParts() {
    if (expParts.length > 1) {
      removeExpField();
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
            key={eduInfo[eduPart - 1].id}
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
          <PracticalExperience
            index={expPart}
            key={expInfo[expPart - 1].id}
            handleExpInfo={handleExpInfo}
            expInfo={expInfo}
          />
        ))}
        <button onClick={handleAddExpParts}>Add Experience</button>
        <button onClick={handleRemoveExpParts}>Remove Experience</button>
      </div>

      <div id="more-info-container" className="editor-container">
        {infoParts.map((infoPart) => (
          <MoreInformation
            index={infoPart}
            key={aInfo[infoPart - 1].id}
            handleAInfo={handleAInfo}
            aInfo={aInfo}
          />
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

function PracticalExperience({ index, expInfo, handleExpInfo }) {
  const [hasEndDate, setEndDate] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [companyName, setCompanyName] = useState(expInfo[0].companyName);
  const [position, setPosition] = useState(expInfo[0].position);
  const [sDate, setSDate] = useState(expInfo[0].startDate);
  const [eDate, setEDate] = useState(expInfo[0].endDate);
  const [uDesc, setUDesc] = useState(expInfo[0].experienceDescription);

  function handleEndDate() {
    if (hasEndDate === false) {
      setEndDate(true);
    } else {
      setEndDate(false);
      setEDate("Present");

      const fullCopy = expInfo.slice(0, expInfo.length);
      fullCopy[index - 1].endDate = "Present";

      handleExpInfo(fullCopy);
    }
  }

  function handleCollapse() {
    isCollapsed ? setIsCollapsed(!isCollapsed) : setIsCollapsed(true);
  }

  function handleCNameChange(e) {
    const updatedCName = e.target.value;
    setCompanyName(updatedCName);

    const fullCopy = expInfo.slice(0, expInfo.length);
    fullCopy[index - 1].companyName = updatedCName;

    handleExpInfo(fullCopy);
  }

  function handlePositionChange(e) {
    const updatedPName = e.target.value;
    setPosition(updatedPName);

    const fullCopy = expInfo.slice(0, expInfo.length);
    fullCopy[index - 1].position = updatedPName;

    handleExpInfo(fullCopy);
  }

  function handleSDateChange(e) {
    const updatedSDate = e.target.value;
    setSDate(updatedSDate);

    const fullCopy = expInfo.slice(0, expInfo.length);
    fullCopy[index - 1].startDate = updatedSDate;

    handleExpInfo(fullCopy);
  }

  function handleEDateChange(e) {
    const updatedEDate = e.target.value;
    setEDate(updatedEDate);

    const fullCopy = expInfo.slice(0, expInfo.length);
    fullCopy[index - 1].endDate = updatedEDate;

    handleExpInfo(fullCopy);
  }

  function handleUDescChange(e) {
    const updatedUDesc = e.target.value;
    setUDesc(updatedUDesc);

    const fullCopy = expInfo.slice(0, expInfo.length);
    fullCopy[index - 1].experienceDescription = updatedUDesc;

    handleExpInfo(fullCopy);
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
      <InputField
        type="text"
        userGuidance={"Company Name"}
        onChange={handleCNameChange}
        text={expInfo[index - 1].companyName}
      />
      <InputField
        type="text"
        userGuidance={"Position"}
        text={expInfo[index - 1].position}
        onChange={handlePositionChange}
      />
      <InputField
        type="date"
        userGuidance={"Starting Date"}
        text={expInfo[index - 1].startDate}
        onChange={handleSDateChange}
      />
      <EndDate
        handleEndDate={handleEndDate}
        hasEndDate={hasEndDate}
        onChange={handleEDateChange}
      />
      <FreeTypingArea
        type="text"
        userGuidance={"Experience description"}
        rows={5}
        cols={33}
        text={expInfo[index - 1].experienceDescription}
        onChange={handleUDescChange}
      />
      <EditorButton
        text={"Save Experience Information"}
        onClick={handleCollapse}
      />
    </>
  );
}

function EndDate({ handleEndDate, hasEndDate, onChange }) {
  return (
    <div className="end-date-container">
      {hasEndDate ? (
        <InputField
          type="date"
          userGuidance={"End Date"}
          onChange={onChange}
        ></InputField>
      ) : (
        <p>Currently working here</p>
      )}
      <button onClick={handleEndDate}>Click to toggle</button>
    </div>
  );
}

function MoreInformation({ index, handleAInfo, aInfo }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [title, setTitle] = useState(aInfo[0].title);
  const [desc, setDesc] = useState(aInfo[0].description);

  function handleCollapse() {
    isCollapsed ? setIsCollapsed(!isCollapsed) : setIsCollapsed(true);
  }

  function handleTitle(e) {
    const updatedT = e.target.value;
    setTitle(updatedT);

    const fullCopy = aInfo.slice(0, aInfo.length);
    fullCopy[index - 1].title = updatedT;

    handleAInfo(fullCopy);
  }

  function handleDesc(e) {
    const updatedD = e.target.value;
    setDesc(updatedD);

    const fullCopy = aInfo.slice(0, aInfo.length);
    fullCopy[index - 1].description = updatedD;

    handleAInfo(fullCopy);
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
      <InputField
        type="text"
        userGuidance={"Title"}
        text={aInfo[index - 1].title}
        onChange={handleTitle}
      />
      <FreeTypingArea
        type="text"
        userGuidance={"Description | Skills | Languages"}
        rows={5}
        cols={33}
        text={aInfo[index - 1].description}
        onChange={handleDesc}
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
