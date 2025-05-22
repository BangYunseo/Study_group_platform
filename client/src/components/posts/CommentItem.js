const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <div className="comment-author">
        {comment.author.nickname}{" "}
        <span className="comment-date">{comment.createdAt}</span>
      </div>
      <p className="comment-content">{comment.content}</p>
    </div>
  );
};

export default CommentItem;
