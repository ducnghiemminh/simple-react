import useFetchPosts from '../../hooks/useFetchPosts';

/* Styles */
import './styles.css';

export default function Posts() {
  const posts = useFetchPosts();

  const handlePostClick = (event) => {
    console.log(event.target, 'clicked');
  };

  return (
    <ol className="posts">
      {posts && posts.map((post) => (
        <li key={post.id} onClick={handlePostClick} className="post__item">
          {post.title}
        </li>
      ))}
    </ol>
  );
}
