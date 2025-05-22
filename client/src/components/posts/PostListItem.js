import { Link } from "react-router-dom";

const PostListItem = ({ post }) => {
  return (
    <tr>
      <td>{post.id.split("-")[1]}</td> {/* 임시 번호 생성 */}
      <td className="title">
        <Link to={`/community/${post.id}`}>{post.title}</Link>
        {post.commentsCount > 0 && (
          <span className="comment-count">[{post.commentsCount}]</span>
        )}
      </td>
      <td>{post.author.nickname}</td>
      <td>{post.createdAt}</td>
      <td>{post.views}</td>
    </tr>
  );
};

export default PostListItem;
