export default function InputField({
  type = "text",
  userGuidance,
  onChange = "",
  text = "",
}) {
  return (
    <label>
      {" "}
      {userGuidance}
      <input type={type} onChange={onChange} value={text}></input>
    </label>
  );
}
