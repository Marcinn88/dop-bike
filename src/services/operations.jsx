import axios from 'axios';

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

export const addArticle = async article => {
  try {
    const response = await axios.post('/articles', article);
    return response.data;
  } catch (error) {
    return console.error(error.message);
  }
};

export const deleteArticle = async articleId => {
  try {
    const response = await axios.delete(`/articles/${articleId}`);
    return response.data;
  } catch (error) {
    return console.error(error.message);
  }
};

export const editArticle = async (data, id) => {
  try {
    const response = await axios.put(`/articles/${id}`, {
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
    return console.error(error.message);
  }
};
