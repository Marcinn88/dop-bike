import axios from 'axios';

axios.defaults.baseURL = '';

export const getArticles = async () => {
  try {
    const response = await axios.get(
      'https://65b15d5ed16d31d11bdec7f4.mockapi.io/articles'
    );
    const responseData = response.data;
    console.log(responseData);
    return responseData;
  } catch (error) {
    return console.error(error.message);
  }
};

export const addArticle = async article => {
  try {
    const response = await axios.post(
      'https://65b15d5ed16d31d11bdec7f4.mockapi.io/articles',
      article
    );
    return response.data;
  } catch (error) {
    return console.error(error.message);
  }
};

export const deleteArticle = async articleId => {
  try {
    const response = await axios.delete(
      `https://65b15d5ed16d31d11bdec7f4.mockapi.io/articles/${articleId}`
    );
    return response.data;
  } catch (error) {
    return console.error(error.message);
  }
};

export const editArticle = async (data, id) => {
  try {
    const response = await axios.put(
      `https://65b15d5ed16d31d11bdec7f4.mockapi.io/articles/${id}`,
      {
        title: data.title,
        date: data.date,
        photo_position: data.photo_position,
        photo: data.photo,
        text1: data.text1,
        text2: data.text2,
        text3: data.text3,
        favorite: data.favorite,
      }
    );
    return response.data;
  } catch (error) {
    return console.error(error.message);
  }
};
