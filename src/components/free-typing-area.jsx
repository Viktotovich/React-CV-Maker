export default function FreeTypingArea({
  id,
  rows,
  cols,
  userGuidance,
  onChange,
  text,
}) {
  return (
    <textarea
      id={id}
      rows={rows}
      cols={cols}
      placeholder={userGuidance + " (300 characters max)"}
      maxLength={300}
      onChange={onChange}
      value={text}
    ></textarea>
  );
}
