import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* Redux actions */
import { fetchPosts } from '../redux/slices/postSlice';

export default function useFetchPosts() {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return posts;
}
