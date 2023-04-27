import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layuot";
import NotFound from "./pages/NotFound";
import { useState } from "react";

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

function App() {
  const [allQuotes, setAllQuotes] = useState(DUMMY_QUOTES);

  const addNewQuote = (newQuote) => {
    setAllQuotes((prev) => {
      return [...prev, newQuote];
    });
  };

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Quotes" />
        </Route>
        <Route path="/Quotes" exact>
          <AllQuotes quotes={allQuotes} />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote
            quotes={allQuotes}
            setAllQuotes={setAllQuotes}
            onAddNewQuote={addNewQuote}
          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
