import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, editPost } from '../../redux/slices/postSlice';

export default function CreatePost({ editedPost = null }) {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    if (editedPost) {
      setPost(editedPost);
    }
  }, [editedPost])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editedPost) {
      dispatch(editPost(post));
    } else {
      dispatch(createPost(post));
    }
  };

  const handleInputChange = (name, value) => {
    setPost({
      ...post,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} type="post">
      <h3>{editedPost ? 'Edit post' : 'Create a new post'}</h3>
      <div className="form-group">
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          name="title"
          id="postTitle"
          className="form-control"
          value={post.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="postBody">Post Body</label>
        <textarea
          name="body"
          id="postBody"
          className="form-control"
          value={post.body}
          onChange={(e) => handleInputChange('body', e.target.value)}
          rows="3"
        ></textarea>
      </div>
      <button type="submit">{editedPost ? 'Save changes' : 'Create'}</button>
    </form>
  );
}
