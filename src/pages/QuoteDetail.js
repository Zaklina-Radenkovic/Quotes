import { Route, useParams, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Nelson Mandela",
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    id: "q2",
    author: "Benjamin Franklin",
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  },
  {
    id: "q3",
    author: "Albert Einstein",
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
];
const QuoteDetail = () => {
  const params = useParams();
  // console.log(params);
  //we want to show text depending on id
  const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId); //returns object
  // console.log(quote);

  //if there is no quote
  if (!quote) return <p>No quotes</p>;

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
