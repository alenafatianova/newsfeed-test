import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetchCategory } from '@app/api';
import { setCategoryArticles } from '@features/categoryArticles/slice';

export const fetchCategoryArticles = createAsyncThunk('api/fetchCategoryArticles', (categoryId: number, thunk) => {
  apiFetchCategory(categoryId).then((news) => {
    thunk.dispatch(setCategoryArticles({ id: categoryId, articles: news.items }));
  });
});
