import { useQuery, gql } from "@apollo/client";
import Quote from "./Quote";

const RANDOM_QUOTE_QUERY = gql`
  query RandomQuoteGet{
    randomQuote {
      text
      author
    }
  }
`;

export default function RandomQuote() {
  const { data, loading, error, refetch } = useQuery(RANDOM_QUOTE_QUERY, {
    fetchPolicy: "no-cache"
  });
  if (loading) {
    return "Quote is loading";
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
  );
}
