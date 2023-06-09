import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = (props) => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // props.setAllQuotes(quoteData);

    props.onAddNewQuote(quoteData);

    history.push("/Quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
