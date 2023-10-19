import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Inspiring Quote</h1>
      <Quote text="to be" author="ha" />
    </div>
  );
}

function Quote({ text, author }) {
  return (
    <>
      <blockquote>
        {text}
        <footer>{author}</footer>
      </blockquote>
    </>
  );
}
