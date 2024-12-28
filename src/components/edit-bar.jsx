import { useState } from "react";
import InputField from "./input-field";
import FreeTypingArea from "./free-typing-area";

export default function EditBar() {
  const [eduParts, setEduParts] = useState([1]);

  function handleAddEduParts() {
    if (eduParts.length < 4) {
      setEduParts((prev) => [...prev, prev.length + 1]);
    } else {
      alert("Too many fields for education");
    }
  }

  function handleRemoveEduParts() {
    if (eduParts.length > 1) {
      setEduParts((prev) => prev.slice(0, -1));
    } else {
      alert("Having atleast one educational field is mandatory");
    }
  }

  return (
    <>
      <GeneralInformation></GeneralInformation>
      <div id="education-container">
        {eduParts.map((eduPart) => (
          <EducationalExperience index={eduPart}></EducationalExperience>
        ))}
        <button onClick={handleAddEduParts}>Add More</button>
        <button onClick={handleRemoveEduParts}>Remove</button>
      </div>
      <PracticalExperience></PracticalExperience>
      <MoreInformation></MoreInformation>
    </>
  );
}

function GeneralInformation() {
  return (
    <>
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
      ></FreeTypingArea>
    </>
  );
}

function PracticalExperience() {
  return <></>;
}

function MoreInformation() {
  return <></>;
}
