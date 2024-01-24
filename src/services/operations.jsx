import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65b15d5ed16d31d11bdec7f4.mockapi.io';

export const getArticles = async () => {
  try {
    const response = await axios.get('/articles');
    const responseData = response.data;
    console.log(responseData);
    return responseData;
  } catch (error) {
    return console.error(error.message);
  }
};

export const addArticle = createAsyncThunk(
  'articles/addArticle',
  async (article, thunkAPI) => {
    try {
      const response = await axios.post('/articles', article);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  'articles/deleteArticle',
  async (articleId, thunkAPI) => {
    try {
      const response = await axios.delete(`/articles/${articleId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editArticle = createAsyncThunk(
  'articles/editArticle',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(`/articles/${data.id}`, {
        title: data.title,
        date: data.date,
        photo_position: data.photo_position,
        photo: data.photo,
        text1: data.text1,
        text2: data.text2,
        text3: data.text3,
        favorite: data.favorite,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
