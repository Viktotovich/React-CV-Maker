export default function FreeTypingArea({ id, rows, cols, userGuidance }) {
  return (
    <textarea
      id={id}
      rows={rows}
      cols={cols}
      placeholder={userGuidance}
    ></textarea>
  );
}
