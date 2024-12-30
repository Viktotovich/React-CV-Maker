export default function InputField({
  type = "text",
  userGuidance,
  onChange = null,
  text = "",
}) {
  if (onChange !== null) {
    return (
      <label>
        {" "}
        {userGuidance}
        <input type={type} onChange={onChange} value={text}></input>
      </label>
    );
  }

  return (
    <label>
      {" "}
      {userGuidance}
      <input type={type} value={text} readOnly={true}></input>
    </label>
  );
}

//too many warning from React - I set to readOnly as per the warnings
