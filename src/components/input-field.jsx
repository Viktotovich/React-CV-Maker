export default function InputField({ type = "text", userGuidance }) {
  return (
    <label>
      {" "}
      {userGuidance}
      <input type={type}></input>
    </label>
  );
}
