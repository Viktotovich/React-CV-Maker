export default function EditBar() {
  return (
    <>
      <GeneralInformation></GeneralInformation>
      <EducationalExperience></EducationalExperience>
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

function EducationalExperience() {
  return <></>;
}

function PracticalExperience() {
  return <></>;
}

function MoreInformation() {
  return <></>;
}

function InputField({ type, userGuidance }) {
  return (
    <label>
      {" "}
      {userGuidance}
      <input type={type}></input>
    </label>
  );
}
