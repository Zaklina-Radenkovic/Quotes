import { useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [comments, setComments] = useState([]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentsHandler = (comment) => {
    console.log(comment);
    setComments((prevComments) => {
      return [comment, ...prevComments];
    });
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm addCommentsHandler={addCommentsHandler} />
      )}
      {comments.length > 0 ? (
        <CommentsList comments={comments} />
      ) : (
        <p>Comments...</p>
      )}
    </section>
  );
};

export default Comments;
