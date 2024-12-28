export default function FreeTypingArea({ id, rows, cols, userGuidance }) {
  return (
    <textarea
      id={id}
      rows={rows}
      cols={cols}
      placeholder={userGuidance + " (300 characters max)"}
      maxLength={300}
    ></textarea>
  );
}
