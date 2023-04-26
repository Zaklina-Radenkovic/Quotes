import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = (props) => {
  return (
    <>
      <QuoteList quotes={props.quotes} />
    </>
  );
};
export default AllQuotes;
