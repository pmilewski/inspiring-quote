import {gql, useQuery} from "@apollo/client" 
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Inspiring Quote</h1>
      <RandomQuote />
    </div>
  );
}

const RANDOM_QUOTE_QUERY = gql`
  query RandomQuoteGet{
    randomQuote {
      text
      author
    }
  }
`

function RandomQuote() {
  const { data, loading, error, refetch } = useQuery(RANDOM_QUOTE_QUERY, {
    fetchPolicy: "no-cache"
  })
  if (loading) {
    return "Quote is loading"
  }

  if (error) {
    return `Error: ${error.message}`;
  }
  const { text, author } = data.randomQuote;

  return (
    <>
      <Quote text={text} author={author} />
      <button
        onClick={() => { 
          refetch();
        }}
      >Get new quote</button>
    </>
  )
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
