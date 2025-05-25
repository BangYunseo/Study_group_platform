import { Link } from "react-router-dom";

const PostListItem = ({ post }) => {
  return (
    <tr>
      <td>{post.id}</td>
      <td>
        <Link to={`/community/post/${post.id}`}>
          {post.title}
          {post.commentsCount > 0 && (
            <span className="comment-count">[{post.commentsCount}]</span>
          )}
        </Link>
      </td>
      <td>{post.author.nickname}</td> {/* 작성자 */}
      <td>{post.createdAt}</td> {/* 작성일 */}
      <td>{post.views}</td> {/* 조회수 */}
      <td>{post.commentsCount}</td> {/* 댓글 수 */}
    </tr>
  );
};

export default PostListItem;
