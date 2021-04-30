import {HTTP, HTTPS} from '../constants/api';

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('Could not fetch.', res.status);

      return false;
    }
    return await res.json();
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
};

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
};

/**
 * Отправляет парралельные/дополнительные запросы fetch
 * @param {Array} url - url-ы для запросов
 * @returns {Array} - результат запроса
 */
export const makeConcurrentRequest = async (url) => {
  const result = await Promise.all(url.map(item => {
    return fetch(item).then(res => res.json())
  }));

  return result;
};
