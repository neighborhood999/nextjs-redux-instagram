export const endPoint = (id, token, path = '') =>
  `https://api.instagram.com/v1/users/${id}/${path}?access_token=${token}`;
