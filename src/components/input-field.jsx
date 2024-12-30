export default function InputField({
  type = "text",
  userGuidance,
  onChange = "",
}) {
  return (
    <label>
      {" "}
      {userGuidance}
      <input type={type} onChange={onChange}></input>
    </label>
  );
}
