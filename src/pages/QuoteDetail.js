import { Route, useParams, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Me",
    text: "Learning React is fun!",
  },
  { id: "q2", author: "Bata", text: "Learning English is amusing!" },
];

const QuoteDetail = () => {
  const params = useParams();

  //we want to show text depending on id
  const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId); //returns object
  console.log(quote);

  //if there is no quote
  if (!quote) return <p>No quoutes</p>;

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link to={`/quotes/${params.quoteId}/comments`} className="btn--flat">
            Load comments...
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};
export default QuoteDetail;
