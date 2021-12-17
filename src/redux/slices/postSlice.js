import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/* Config */
import { apiBaseUrl } from '../../config';

const initialState = {
  posts: [],
  postDetail: null,
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(
    `${apiBaseUrl}/posts`
  ).then((data) => data.json());
  return response;
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
  const response = await fetch(`${apiBaseUrl}/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  return response;
});

export const editPost = createAsyncThunk('posts/editPost', async (post) => {
  const response = await fetch(`${apiBaseUrl}/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  return response;
});

export const getPost = createAsyncThunk('posts/getPost', async (postId) => {
  const response = await fetch(`${apiBaseUrl}/posts/${postId}`)
    .then((response) => response.json());
  return response;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state) => {
      state.isLoading = false;
    },
    [createPost.pending]: (state) => {
      state.isLoading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [createPost.rejected]: (state) => {
      state.isLoading = false;
    },
    [editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      const postIndex = state.posts.findIndex((post) => post.id === action.payload.id);
      if (postIndex !== -1) {
        state.posts[postIndex] = action.payload;
      }
    },
    [editPost.rejected]: (state) => {
      state.isLoading = false;
    },
    [getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [getPost.fullfilled]: (state, action) => {
      state.isLoading = false;
      state.postDetail = action.payload;
    },
    [getPost.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, hasError } = postSlice.actions;
export default postSlice.reducer;
