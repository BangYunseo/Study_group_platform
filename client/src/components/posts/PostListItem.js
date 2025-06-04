import { Link } from 'react-router-dom';

const PostListItem = ({ post }) => {
    return (
        <tr>
            <td>{post.post_id}</td> {/* post_id로 수정 */}
            <td>
                <Link to={`/community/post/${post.post_id}`}>{post.title}</Link>
            </td>
            <td>{post.author?.nickname || post.author?.username || '작성자 없음'}</td>
            <td>{new Date(post.created_at).toLocaleDateString()}</td>
            <td>{post.views}</td>
            <td>{post.comment_count}</td>
        </tr>
    );
};

export default PostListItem;
