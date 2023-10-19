export default function Quote({ text, author }) {
  return (
    <>
      <blockquote>
        {text}
        <footer>{author}</footer>
      </blockquote>
    </>
  );
}
