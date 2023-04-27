import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    localStorage.setItem(
      "quotes",
      JSON.stringify({
        enteredAuthor,
        enteredText,
        id: new Date().toISOString(),
      })
    );

    // optional: Could validate here

    props.onAddQuote({
      author: enteredAuthor,
      text: enteredText,
      id: new Date().toISOString(),
    });
  }

  //checking if form is in focus
  // const formFocusedHandler = () => {
  //   console.log("focus");
  //   setIsEntering(true);
  // };

  return (
    <>
      <Prompt when={isEntering} message={(location) => "Are you sure?"} />
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          // onFocus={formFocusedHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={() => setIsEntering(false)} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
