import { useState } from "react";
import InputField from "./input-field";
import FreeTypingArea from "./free-typing-area";
import warningMessages from "./warning-messages";

export default function EditBar() {
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
      <GeneralInformation />
      <div id="education-container">
        {eduParts.map((eduPart) => (
          <EducationalExperience index={eduPart} />
        ))}
        <button onClick={handleAddEduParts}>Add More</button>
        <button onClick={handleRemoveEduParts}>Remove</button>
      </div>
      <div id="experience-container">
        {expParts.map((expPart) => (
          <PracticalExperience index={expPart} />
        ))}
        <button onClick={handleAddExpParts}>Add Experience</button>
        <button onClick={handleRemoveExpParts}>Remove Experience</button>
      </div>
      <div id="more-info-container">
        {infoParts.map((infoPart) => (
          <MoreInformation index={infoPart} />
        ))}
        <button onClick={handleAddInfoParts}>Add Additional Information</button>
        <button onClick={handleRemoveInfoParts}>Remove Previous</button>
      </div>
    </>
  );
}

function GeneralInformation() {
  return (
    <>
      <h2>General Information</h2>
      <InputField type={"text"} userGuidance={"Your Name:"}></InputField>
      <InputField type={"email"} userGuidance={"Your Email:"}></InputField>
      <InputField type={"tel"} userGuidance={"Your Telephone:"}></InputField>
    </>
  );
}

function EducationalExperience({ index }) {
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
    </>
  );
}

function PracticalExperience({ index }) {
  const [hasEndDate, setEndDate] = useState(false);

  function handleEndDate() {
    if (hasEndDate === false) {
      setEndDate(true);
    } else {
      setEndDate(false);
    }
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
    </>
  );
}
