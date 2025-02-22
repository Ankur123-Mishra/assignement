import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRepositories } from '../../services/api';

export const searchRepositories = createAsyncThunk(
  'repositories/search',
  async (query) => {
    const data = await fetchRepositories(query);
    return data.items;
  }
);

const repoSlice = createSlice({
  name: 'repositories',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchRepositories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchRepositories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(searchRepositories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default repoSlice.reducer;
